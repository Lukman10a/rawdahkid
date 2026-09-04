import { Resend } from "resend";

let cached: Resend | null = null;

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  if (cached) return cached;
  cached = new Resend(key);
  return cached;
}

export async function sendRegistrationConfirmation(params: {
  to: string;
  parentName: string;
  childName: string;
  programmeInterest: string;
  classFormat: string;
}): Promise<boolean> {
  const client = getResend();
  if (!client) {
    console.warn("[email] RESEND_API_KEY missing, skipping send to", params.to);
    return false;
  }

  const from = process.env.EMAIL_FROM || "onboarding@resend.dev";
  const replyTo = process.env.EMAIL_REPLY_TO || "admissions@rawdahkids.org";

  try {
    const { error } = await client.emails.send({
      from,
      to: params.to,
      replyTo,
      subject: `Welcome to Rawdah Kids — ${params.childName} registered`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a1a1a">
          <h1 style="color:#C9A86A">Welcome to Rawdah Kids, ${escapeHtml(params.parentName)}!</h1>
          <p>Your registration for <strong>${escapeHtml(params.childName)}</strong> has been received.</p>
          <p>Programme: <strong>${escapeHtml(params.programmeInterest)}</strong> — ${escapeHtml(params.classFormat)}</p>
          <p>What's next:</p>
          <ul>
            <li>Our admissions team will review your details within 24 hours.</li>
            <li>You'll receive payment instructions and class schedule.</li>
            <li><a href="https://calendly.com/markazulbayaan">Book a free consultation call</a></li>
          </ul>
          <p style="color:#666;font-size:12px">Questions? Reply to ${escapeHtml(replyTo)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[email] Resend error", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] send failed", err);
    return false;
  }
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function resetResendForTest() {
  cached = null;
}
