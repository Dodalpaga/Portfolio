// pages/api/compile.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const endpoint = 'https://emkc.org/api/v2/piston/execute';

    try {
      const response = await axios.post(endpoint, req.body);
      console.log('Response:', response.data);
      return res.status(200).json(response.data);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Failed to compile code.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
