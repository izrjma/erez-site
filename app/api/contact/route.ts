import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Mailer not configured' }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    const { name, email, venue, type, message } = await req.json();

    if (!name || !email || !venue) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const html = `
      <div style="font-family:system-ui,sans-serif;color:#111;line-height:1.6">
        <h2 style="margin:0 0 16px;font-size:18px">New erez inquiry</h2>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Email:</strong> ${escape(email)}</p>
        <p><strong>Venue:</strong> ${escape(venue)}</p>
        ${type ? `<p><strong>Type:</strong> ${escape(type)}</p>` : ''}
        ${message ? `<p style="margin-top:20px"><strong>Message:</strong></p><p style="white-space:pre-wrap">${escape(message)}</p>` : ''}
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'erez site <noreply@erez.app>',
      to: 'hello@erez.app',
      replyTo: email,
      subject: `erez — ${venue}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Send failed' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
