import { v } from "convex/values"
import { action, internalMutation, query } from "./_generated/server"
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

export const storePrediction = internalMutation({
  args: {
    u: v.number(),
    g: v.number(),
    r: v.number(),
    i: v.number(),
    z: v.number(),
    redshift: v.number(),
    result: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("predictions", args)
  },
})

export const getPredictions = query({
  handler: async (ctx) => {
    return await ctx.db.query("predictions").order("desc").collect()
  },
})
