import { useState } from 'react'
function useToggle() { const [v, setV] = useState(false); return [v, () => setV(x => !x)] }
export default function Example() { const [open, toggle] = useToggle(); return <button onClick={toggle}>{open ? 'Open' : 'Closed'}</button> }
