export const localeTypes = [
  { id: "ristorante", label: "Ristorante / Bar" },
  { id: "pizzeria", label: "Pizzeria" },
  { id: "hotel", label: "Hotel / Hall" },
  { id: "altro", label: "Altro locale HoReCa" },
] as const;

export const superficieOptions = [
  {
    id: "soffitto",
    label: "Soffitto",
    hint: "Spesso la prima leva sul riverbero",
  },
  {
    id: "parete",
    label: "Pareti",
    hint: "Moduli tipo Hexagon / Wave",
  },
  {
    id: "isole",
    label: "Isole sospese",
    hint: "Design + assorbimento bilaterale",
  },
] as const;

export const mqPresets = [
  { id: "s", label: "fino a 40 mq", value: 35 },
  { id: "m", label: "40–80 mq", value: 60 },
  { id: "l", label: "80–150 mq", value: 110 },
  { id: "xl", label: "oltre 150 mq", value: 180 },
] as const;

export type WizardDraft = {
  locale: string;
  mq: number;
  mqLabel: string;
  superfici: string[];
};
