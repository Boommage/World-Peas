import { action } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";

export const createCheckoutSession = action({
  args: {
    total: v.number(),
  },
  handler: async (_, args) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Total Price",
            },
            unit_amount: Math.round(args.total * 100), // cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/thanks",
      cancel_url: "http://localhost:5173/cart",
    });
    return { url: session.url };
  },
});