import { useState } from "react"
import { Button } from "@/components/ui/button"

type Fields = { u: number; g: number; r: number; i: number; z: number; redshift: number }

interface Props {
  onSubmit: (values: Fields) => void
  loading: boolean
}

const FIELDS: { key: keyof Fields; label: string }[] = [
  { key: "u", label: "Ultraviolet (u)" },
  { key: "g", label: "Green (g)" },
  { key: "r", label: "Red (r)" },
  { key: "i", label: "Near-infrared (i)" },
  { key: "z", label: "Z-infrared (z)" },
  { key: "redshift", label: "Redshift" },
]

export default function ClassifyForm({ onSubmit, loading }: Props) {
  const [values, setValues] = useState<Fields>({ u: 0, g: 0, r: 0, i: 0, z: 0, redshift: 0 })

  function handleChange(key: keyof Fields, val: string) {
    setValues((prev) => ({ ...prev, [key]: parseFloat(val) || 0 }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {FIELDS.map(({ key, label }) => (
        <div key={key} className="flex flex-col gap-1">
          <label className="text-xs text-muted-foreground">{label}</label>
          <input
            type="number"
            step="any"
            value={values[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            className="rounded border bg-background px-2 py-1 text-sm"
          />
        </div>
      ))}
      <Button type="submit" disabled={loading}>
        {loading ? "Classifying..." : "Classify"}
      </Button>
    </form>
  )
}
