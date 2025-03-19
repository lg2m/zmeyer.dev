import { env } from "@/env";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { Webhook } from "svix";

export async function POST(req: NextRequest) {
  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixIdTimeStamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixIdTimeStamp || !svixSignature) {
    return new Response("Error occured", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const svixHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixIdTimeStamp,
    "svix-signature": svixSignature,
  };
  const wh = new Webhook(env.CLERK_WEBHOOK_SECRET);

  let evt: WebhookEvent | null = null;
  try {
    evt = wh.verify(body, svixHeaders) as WebhookEvent;
  } catch (err) {
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  const eventType = evt.type;

  switch (eventType) {
    case "user.created": {
      const { id } = evt.data;
      await db.insert(users).values({
        clerkId: id,
      });
      break;
    }
  }

  return new Response("Webhook received", { status: 200 });
}
