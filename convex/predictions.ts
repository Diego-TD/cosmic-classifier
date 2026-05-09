import { v } from "convex/values"
import { internalMutation, query } from "./_generated/server"

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
