"use client";

import { Symbols } from '@/components/symbols';
import { fetcher } from '@/utils/fetcher';
import { formatPrice } from '@/utils/formatPrice';
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [symbols, setSymbols] = useState<Array<string>>([])
  const [amount, setAmount] = useState("0");
  const [fromSymbol, setFromSymbol] = useState("");
  const [toSymbol, setToSymbol] = useState("");
  const [convertResult, setConvertResult] = useState(0);

  useEffect(() => {
    fetcher('/api/symbols').then(setSymbols);
  }, [])

  const convert = () => {
    const url = `from=${fromSymbol}&to=${toSymbol}&amount=${amount}`;

    fetcher(`/api/convert?${url}`).then(setConvertResult)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.description}>Online valutaváltó</h1>
        <div className={styles.grid}>
          <div>
            <h2>
              Összeg
            </h2>
            <input type="text" onChange={(e) => setAmount(e.target.value)} value={amount} />
          </div>

          <div>
            <Symbols data={symbols} setter={setFromSymbol} />
          </div>
          <div>
            <Symbols data={symbols} setter={setToSymbol} />
          </div>

        </div>
        <div><input type="submit" value="Mehet" onClick={convert} /></div>
        <div> {amount} {fromSymbol} = { formatPrice(convertResult) } {toSymbol}</div>
    </main>
  )
}
