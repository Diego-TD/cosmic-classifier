import { CLASS_LABELS, CLASS_SPRITES } from "../../lib/utils"

interface Props {
  result: string | null
}

export default function Results({ result }: Props) {
  if (!result) return null
  console.log(result)

  return (
    <div className="flex flex-col rounded border p-3">
      <p className="text-xs text-muted-foreground">Classification</p>
      <div className="flex items-center gap-2">
        <p className="font-medium">{CLASS_LABELS[result] ?? result}</p>
        <img
          src={CLASS_SPRITES[result]}
          alt={CLASS_LABELS[result] ?? result}
          className="h-8 w-8"
        />
      </div>
    </div>
  )
}
