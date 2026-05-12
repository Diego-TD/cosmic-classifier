import { CLASS_LABELS, CLASS_SPRITES } from "../../lib/utils"

import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

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
          <div className="flex flex-col">
            <span className="font-medium">
              {CLASS_LABELS[p.result] ?? p.result}
            </span>
            <span className="text-muted-foreground">
              u:{p.u} g:{p.g} r:{p.r} i:{p.i} z:{p.z} Δz:{p.redshift}
            </span>
          </div>

          <img
            src={CLASS_SPRITES[p.result]}
            alt={CLASS_LABELS[p.result] ?? p.result}
            className="h-8 w-8"
          />
        </div>
      ))}
    </div>
  )
}
