import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '@/lib/db';

type ResponseData = {
  id: number;
  symbol: string;
}[]

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Array<string>>
) {
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM symbols'
    }) as ResponseData;

    const convertedResult = result.map(({ symbol }) => symbol);

    res.status(200).json(convertedResult);

  } catch ( error ) {
    console.log( error );
  }
}
