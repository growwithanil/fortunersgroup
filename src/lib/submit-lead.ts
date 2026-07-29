// Lead delivery for the static build.
//
// The site is deployed as plain files (no Node runtime), so submissions go
// straight from the browser to FormSubmit's AJAX endpoint, which forwards them
// to the sales inbox as email.
//
// NOTE: FormSubmit requires a one-time activation per recipient address. The
// first submission triggers a confirmation email to LEAD_INBOX; until someone
// clicks the link in it, later submissions are accepted but not delivered.

const LEAD_INBOX = "hello@fortunersgroup.com";

export type LeadFields = Record<string, string | undefined>;

export async function submitLead(fields: LeadFields, source: string): Promise<void> {
  const name = fields.Name?.trim();

  const body: Record<string, string> = {
    _subject: `New Fortuners website lead — ${name || "Website visitor"}`,
    _template: "table",
    _captcha: "false",
    Source: source,
    SubmittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  for (const [key, value] of Object.entries(fields)) {
    const trimmed = value?.trim();
    if (trimmed) body[key] = trimmed;
  }

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(LEAD_INBOX)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Lead submission failed (${res.status})`);
  }
}

/** Reads a form's named fields into a plain object, dropping FormSubmit's own keys. */
export function fieldsFromForm(form: HTMLFormElement): LeadFields {
  const fields: LeadFields = {};
  for (const [key, value] of new FormData(form).entries()) {
    if (typeof value === "string" && !key.startsWith("_")) fields[key] = value;
  }
  return fields;
}
