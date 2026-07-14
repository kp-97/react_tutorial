import { useState } from 'react'
export default function Example() { const [count, setCount] = useState(0); return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button> }
