import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '@/env';
import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    insecureAuth: true
  }
});

interface QueryProps {
  query: string;
  values?: Array<string>;
}

export default async function excuteQuery({ query, values }: QueryProps) {
  try {
    let results = await db.query(query, values);
    await db.end();

    return results;
  } catch (error) {
    return { error };
  }
}
