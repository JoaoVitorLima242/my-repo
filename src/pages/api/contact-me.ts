import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({message: 'Hello'})
}
