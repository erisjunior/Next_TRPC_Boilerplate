import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

import { env } from '~/application/config/env'
import EmailTemplate from '~/presentation/components/email'

const resend = new Resend(env.RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!EmailTemplate) return

    const data = await resend.sendEmail({
      from: '',
      to: '',
      subject: 'hello world',
      react: EmailTemplate()
    })

    res.status(200).json(data)
  } catch (error) {
    console.error(error)
    res.status(400).json(error)
  }
}
