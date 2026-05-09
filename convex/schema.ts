import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  predictions: defineTable({
    u: v.number(),
    g: v.number(),
    r: v.number(),
    i: v.number(),
    z: v.number(),
    redshift: v.number(),
    result: v.string(),
  }),
})
