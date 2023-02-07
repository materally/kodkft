import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '@/lib/db';
import { RateInterface } from './model';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  if(req.method !== 'POST'){
    res.status(405).json({ error: true, message: 'Method Not Allowed' });
  }

  const { from_symbol, to_symbol, rate } = req.body;

  try {
    const db = await excuteQuery({
      query: 'SELECT * FROM rates WHERE from_symbol = ? AND to_symbol = ? LIMIT 1',
      values: [from_symbol, to_symbol]
    }) as Array<RateInterface>;

    if(db.length > 0){
      res.status(409).json({ error: true, message: 'Ez a ráta már létezik!' });
      return;
    }

    const create = await excuteQuery({
      query: 'INSERT INTO rates (from_symbol, to_symbol, rate) VALUES (?, ?, ?)',
      values: [from_symbol, to_symbol, rate]
    })

    if(create){
      res.status(204);
    }

  } catch ( error ) {
    console.log( error );
  }
}
