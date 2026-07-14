import { useEffect, useState } from 'react'
export default function Example() { const [online, setOnline] = useState(navigator.onLine); useEffect(() => { const update = () => setOnline(navigator.onLine); window.addEventListener('online', update); return () => window.removeEventListener('online', update) }, []); return <p>{online ? 'Online' : 'Offline'}</p> }
