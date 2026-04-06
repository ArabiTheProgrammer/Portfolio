import { sendContactEmail } from '../lib/contactEmail.js';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, subject, message } = request.body ?? {};
  const result = await sendContactEmail({
    name,
    email,
    subject,
    message,
    apiKey: process.env.RESEND_API_KEY,
    toEmail: process.env.CONTACT_TO_EMAIL || 'mdjalaluddinarabi@gmail.com',
    fromEmail: process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
  });

  return response.status(result.status).json({
    message: result.message,
    ...(result.mocked ? { mocked: true } : {}),
    ...(result.error ? { error: result.error } : {}),
  });
}
