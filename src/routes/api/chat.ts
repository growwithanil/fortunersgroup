import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, tool, stepCountIs, type UIMessage } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const LEAD_INBOX = "hello@fortunersgroup.com";

const SYSTEM_PROMPT = `You are the Fortuners Group virtual sales assistant — warm, concise, and professional. You help website visitors explore our offerings and qualify them as leads.

About Fortuners Group:
- Fortuners Group is a premium real estate and construction house based in Bengaluru.
- Three sub-brands:
  1. Fortuners Infraa — Builders & Developers (Apartment, Layout, Villas, Row House developments). Signature project: Fortuners Infraa Elixir.
  2. Fortuners BuildEdge — Turnkey Construction (End-to-End Home, Residential & Commercial, Industrial & Infrastructure).
  3. Fortuners Decor — Interior & Decor (Interior Design, Modular Interiors, Home & Office Interior Solutions, Turnkey Interior Projects).
- Corporate Office: #840, First Floor, 17th Main Road, Sector 3, HSR Layout, Bengaluru, Karnataka – 560102.
- Phone: +91 96112 13181.

Your job — qualify visitors into leads:
1. Greet warmly and ask what brings them here today (buying a home, plot, construction, interiors, partnership).
2. Naturally collect: name, phone number, city/location interest, budget range, and timeline.
3. Ask ONE short question at a time — don't dump forms on them.
4. Match their intent to the right vertical (Infraa / BuildEdge / Decor) and briefly explain what we offer there.
5. Once you have at least name + phone + interest, IMMEDIATELY call the "submit_lead" tool with the collected details BEFORE writing your reply. After the tool returns, thank the visitor, confirm an advisor will reach out shortly, share +91 96112 13181, and suggest /contact.
6. Call "submit_lead" only once per conversation unless the visitor gives new/corrected details.
7. Keep replies short (2–4 sentences). Use markdown sparingly.
8. Never invent prices, project availability, or specific unit numbers. If asked, say an advisor will confirm.
9. If asked something off-topic (unrelated to real estate/construction/interiors), politely steer back.`;

async function sendLeadEmail(payload: {
  name: string;
  phone: string;
  interest: string;
  location?: string;
  budget?: string;
  timeline?: string;
  notes?: string;
}) {
  const body = {
    _subject: `New Fortuners website lead — ${payload.name}`,
    _template: "table",
    _captcha: "false",
    Name: payload.name,
    Phone: payload.phone,
    Interest: payload.interest,
    Location: payload.location ?? "—",
    Budget: payload.budget ?? "—",
    Timeline: payload.timeline ?? "—",
    Notes: payload.notes ?? "—",
    Source: "Fortuners Group website chatbot",
    SubmittedAt: new Date().toISOString(),
  };

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(LEAD_INBOX)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`FormSubmit failed [${res.status}]: ${text}`);
  }
  return await res.json().catch(() => ({ success: true }));
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(messages)) {
          return new Response("Messages are required", { status: 400 });
        }

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3.6-flash"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages as UIMessage[]),
          stopWhen: stepCountIs(4),
          tools: {
            submit_lead: tool({
              description:
                "Send the qualified lead's contact details to the Fortuners Group sales inbox. Call this once you have at least name, phone, and interest.",
              inputSchema: z.object({
                name: z.string().min(1).describe("Visitor's full name"),
                phone: z.string().min(6).describe("Visitor's phone number with country code if provided"),
                interest: z
                  .string()
                  .min(2)
                  .describe(
                    "Which vertical / offering they're interested in (e.g. Apartment in Fortuners Infraa Elixir, Turnkey home construction, Interior design)",
                  ),
                location: z.string().optional().describe("City / area of interest"),
                budget: z.string().optional().describe("Budget range if shared"),
                timeline: z.string().optional().describe("When they plan to move / start"),
                notes: z.string().optional().describe("Any extra context worth passing to the advisor"),
              }),
              execute: async (input) => {
                try {
                  await sendLeadEmail(input);
                  return { ok: true, message: "Lead sent to Fortuners sales team." };
                } catch (err) {
                  console.error("Lead email failed", err);
                  return { ok: false, message: "Could not deliver right now — advisor will still be notified via phone." };
                }
              },
            }),
          },
        });

        return result.toUIMessageStreamResponse({
          originalMessages: messages as UIMessage[],
        });
      },
    },
  },
});
