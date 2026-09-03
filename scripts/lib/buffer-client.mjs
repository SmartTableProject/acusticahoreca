/**
 * Client Buffer GraphQL (api.buffer.com).
 * Auth: BUFFER_API_KEY (Bearer) — mai in repo, solo env / .env.local
 */

const BUFFER_API = "https://api.buffer.com";

export function getBufferApiKey() {
  const key = process.env.BUFFER_API_KEY?.trim();
  if (!key) {
    throw new Error(
      "Manca BUFFER_API_KEY. Crea la chiave su publish.buffer.com → Settings → API",
    );
  }
  return key;
}

export async function bufferGraphql(query, variables = {}) {
  const res = await fetch(BUFFER_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getBufferApiKey()}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Buffer HTTP ${res.status}: ${JSON.stringify(json)}`);
  }
  if (json.errors?.length) {
    throw new Error(`Buffer GraphQL: ${JSON.stringify(json.errors)}`);
  }
  return json.data;
}

export async function listOrganizations() {
  const data = await bufferGraphql(`
    query GetOrganizations {
      account {
        organizations {
          id
          name
        }
      }
    }
  `);
  return data.account.organizations;
}

export async function listChannels(organizationId) {
  // OrganizationId è uno scalar Buffer, non String — inlinamo l'id validato
  if (!/^[a-zA-Z0-9_-]+$/.test(organizationId)) {
    throw new Error("organizationId non valido");
  }
  const data = await bufferGraphql(`
    query GetChannels {
      channels(input: { organizationId: "${organizationId}" }) {
        id
        name
        service
      }
    }
  `);
  return data.channels;
}

export async function createScheduledPost(opts) {
  const { text, channelId, imageUrl, dueAtIso, dryRun } = opts;

  if (!/^[a-zA-Z0-9_-]+$/.test(channelId) && !dryRun) {
    throw new Error("channelId non valido");
  }

  const assets = imageUrl
    ? [{ image: { url: imageUrl } }]
    : [];

  const mode = dueAtIso ? "customScheduled" : "addToQueue";

  if (dryRun) {
    return {
      dryRun: true,
      channelId,
      mode,
      dueAt: dueAtIso ?? null,
      textPreview: text.slice(0, 80) + "…",
      imageUrl: imageUrl ?? null,
    };
  }

  // Tipi Buffer (scalar ChannelId / CreatePostMode) — campi inlinati in modo sicuro
  const assetsGql = imageUrl
    ? `assets: [{ image: { url: ${JSON.stringify(imageUrl)} } }]`
    : "";
  const dueGql = dueAtIso
    ? `dueAt: ${JSON.stringify(dueAtIso)}`
    : "";

  const data = await bufferGraphql(`
    mutation CreateScheduledPost {
      createPost(
        input: {
          text: ${JSON.stringify(text)}
          channelId: "${channelId}"
          schedulingType: automatic
          mode: ${mode}
          ${dueGql}
          ${assetsGql}
        }
      ) {
        ... on PostActionSuccess {
          post {
            id
            text
            dueAt
            status
          }
        }
        ... on MutationError {
          message
        }
      }
    }
  `);

  const result = data.createPost;
  if (result?.message) {
    throw new Error(`Buffer createPost: ${result.message}`);
  }
  return result.post;
}

/** Rome local date+time → ISO UTC */
export function romeLocalToUtcIso(dateStr, timeStr) {
  const asRome = `${dateStr}T${timeStr}:00`;
  for (const offset of ["+02:00", "+01:00"]) {
    const candidate = new Date(`${asRome}${offset}`);
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Rome",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(candidate);
    const get = (t) => parts.find((p) => p.type === t)?.value;
    const local = `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}`;
    if (local === `${dateStr} ${timeStr}`) {
      return candidate.toISOString();
    }
  }
  // fallback estate
  return new Date(`${asRome}+02:00`).toISOString();
}
