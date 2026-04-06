const RESEND_API_URL = 'https://api.resend.com/emails';

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
  apiKey,
  toEmail,
  fromEmail,
  allowMock = false,
}) {
  if (!name || !email || !subject || !message) {
    return {
      ok: false,
      status: 400,
      message: 'All fields are required.',
    };
  }

  if (!apiKey) {
    if (allowMock) {
      return {
        ok: true,
        status: 200,
        message: 'Local test mode: message captured without sending an email.',
        mocked: true,
      };
    }

    return {
      ok: false,
      status: 500,
      message: 'Missing RESEND_API_KEY environment variable.',
    };
  }

  try {
    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      return {
        ok: false,
        status: resendResponse.status,
        message: result?.message || 'Failed to send email.',
      };
    }

    return {
      ok: true,
      status: 200,
      message: 'Email sent successfully.',
      result,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      message: 'Something went wrong while sending the email.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
