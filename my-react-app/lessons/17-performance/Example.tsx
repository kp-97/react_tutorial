import { useMemo, useState } from 'react'
export default function Example() { const [q, setQ] = useState(''); const items = useMemo(() => ['JSX', 'State', 'Effects'].filter(x => x.toLowerCase().includes(q.toLowerCase())), [q]); return <div><input value={q} onChange={e => setQ(e.target.value)} />{items.join(', ')}</div> }
