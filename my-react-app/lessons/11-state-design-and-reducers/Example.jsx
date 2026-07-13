import { useReducer } from 'react'
function reducer(s, a) { return a.type === 'increment' ? { count: s.count + 1 } : s }
export default function Example() { const [s, dispatch] = useReducer(reducer, { count: 0 }); return <button onClick={() => dispatch({ type: 'increment' })}>{s.count}</button> }
