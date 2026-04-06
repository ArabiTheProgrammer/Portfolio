import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { sendContactEmail } from './lib/contactEmail.js'

const readRequestBody = (request) =>
  new Promise((resolve, reject) => {
    let body = ''

    request.on('data', (chunk) => {
      body += chunk
    })

    request.on('end', () => {
      resolve(body)
    })

    request.on('error', reject)
  })

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'local-contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (request, response, next) => {
            if (request.method !== 'POST') {
              return next()
            }

            try {
              const rawBody = await readRequestBody(request)
              const body = rawBody ? JSON.parse(rawBody) : {}

              const result = await sendContactEmail({
                name: body.name,
                email: body.email,
                subject: body.subject,
                message: body.message,
                apiKey: env.RESEND_API_KEY,
                toEmail: env.CONTACT_TO_EMAIL || 'mdjalaluddinarabi@gmail.com',
                fromEmail: env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
                allowMock: false,
              })

              response.statusCode = result.status
              response.setHeader('Content-Type', 'application/json')
              response.end(
                JSON.stringify({
                  message: result.message,
                  ...(result.mocked ? { mocked: true } : {}),
                  ...(result.error ? { error: result.error } : {}),
                }),
              )
            } catch (error) {
              response.statusCode = 500
              response.setHeader('Content-Type', 'application/json')
              response.end(
                JSON.stringify({
                  message: 'Local contact handler failed.',
                  error: error instanceof Error ? error.message : 'Unknown error',
                }),
              )
            }
          })
        },
      },
    ],
  }
})
