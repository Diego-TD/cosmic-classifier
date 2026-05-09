const CLASS_LABELS: Record<string, string> = {
  GALAXY: "Galaxy",
  STAR: "Star",
  QSO: "Quasar (QSO)",
}

interface Props {
  result: string | null
}

export default function Results({ result }: Props) {
  if (!result) return null

  return (
    <div className="rounded border p-3">
      <p className="text-xs text-muted-foreground">Classification</p>
      <p className="font-medium">{CLASS_LABELS[result] ?? result}</p>
    </div>
  )
}
