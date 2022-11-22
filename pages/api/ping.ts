import type { NextApiRequest, NextApiResponse } from 'next'

type PingResponse = {
  success: true
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PingResponse>
) {
  res.status(200).json({ success: true })
}
