import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '@/lib/db';
import { RateInterface } from './model';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { query } = req;
  const from = String(query.from);
  const to = String(query.to);
  const amount = String(query.amount);

  try {
    const db = await excuteQuery({
      query: 'SELECT * FROM rates WHERE from_symbol = ? AND to_symbol = ? LIMIT 1',
      values: [from, to]
    }) as Array<RateInterface>;

    if(Object.keys(db).length === 0){
      res.status(404).json({ error: true, message: 'Nem található a ráta!' });
      return;
    }

    const result = Number(amount) * db[0].rate;
    
    res.status(200).json(result);
  } catch ( error ) {
    console.log( error );
  }
}
