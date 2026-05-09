import { ConvexError, v } from "convex/values"
import { mutation, action } from "./_generated/server"

export const predict = mutation({
  args: {
    ultraviolet: v.number(),
    green: v.number(),
    red: v.number(),
    i_near_ifrared: v.number(),
    z_infrared: v.number(),
    redshift: v.number(),
  },
  handler: async (ctx, args) => {
    return await predictAction(ctx, args)
  },
})

const predictAction = action({
  handler: async (ctx, args) => {
    // call fastapi
    // http://localhost:8000/predict // or prod domain

    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    })
    const data = await response.json()
    console.log(data)
    return data
  },
})
