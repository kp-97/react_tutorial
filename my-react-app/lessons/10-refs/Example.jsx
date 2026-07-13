import { useRef } from 'react'
export default function Example() { const ref = useRef(null); return <div><input ref={ref} /><button onClick={() => ref.current?.focus()}>Focus</button></div> }
