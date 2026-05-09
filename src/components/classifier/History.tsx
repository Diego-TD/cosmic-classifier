import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

const CLASS_LABELS: Record<string, string> = {
  GALAXY: "Galaxy",
  STAR: "Star",
  QSO: "Quasar (QSO)",
}

export default function History() {
  const predictions = useQuery(api.predict.getPredictions)

  if (!predictions?.length) return null

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground">History</p>
      {predictions.map((p) => (
        <div
          key={p._id}
          className="flex justify-between rounded border px-3 py-2 text-xs"
        >
          <span className="text-muted-foreground">
            u:{p.u} g:{p.g} r:{p.r} i:{p.i} z:{p.z} Δz:{p.redshift}
          </span>
          <span className="font-medium">
            {CLASS_LABELS[p.result] ?? p.result}
          </span>
        </div>
      ))}
    </div>
  )
}
