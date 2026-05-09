import { useState } from "react"
import ClassifyForm from "../components/classifier/ClassifyForm"
import Results from "../components/classifier/Results"
import History from "../components/classifier/History"
import { api } from "../../convex/_generated/api"
import { useAction } from "convex/react"

type Fields = {
  u: number
  g: number
  r: number
  i: number
  z: number
  redshift: number
}

export default function Classifier() {
  const classify = useAction(api.predict.predict)
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(values: Fields) {
    setLoading(true)
    try {
      const r = await classify(values)
      setResult(r)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="text-2xl font-medium">Cosmic classifier</h1>
        </div>
        <ClassifyForm onSubmit={handleSubmit} loading={loading} />
        <Results result={result} />
        <History />
      </div>
    </div>
  )
}
