import { useState } from 'react'
export default function Example() { const [name, setName] = useState(''); return <form onSubmit={e => { e.preventDefault(); window.alert(name) }}><label>Name <input value={name} onChange={e => setName(e.target.value)} /></label><button>Save</button></form> }
