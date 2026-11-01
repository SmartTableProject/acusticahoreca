/** H1 semantico nascosto visivamente — non altera il layout */
export function SeoH1({ children }: { children: React.ReactNode }) {
  return <h1 className="sr-only">{children}</h1>;
}
