"use node"

import { v } from "convex/values"
import { action } from "./_generated/server"
import { internal } from "./_generated/api"

export const predict = action({
  args: {
    u: v.number(),
    g: v.number(),
    r: v.number(),
    i: v.number(),
    z: v.number(),
    redshift: v.number(),
  },
  handler: async (ctx, args) => {
    const apiUrl = process.env.ML_API
    const response = await fetch(`${apiUrl}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(args),
    })
    const data = await response.json()
    const result: string = data.class
    await ctx.runMutation(internal.predict.storePrediction, { ...args, result })
    return result
  },
})
