
interface SymbolsProps {
  data: Array<string>;
  setter: (value: string) => void;
}

export const Symbols = ({ data, setter }: SymbolsProps) => {
  return (
    <select onChange={(e) => setter(e.target.value)}>
      <option value="">Kérlek válassz!</option> 
      { data?.map(symbol => <option key={symbol} value={symbol}>{ symbol }</option>) }
    </select>
  )
}