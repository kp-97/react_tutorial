function Status({ ready }) { return ready ? <p>Ready!</p> : <p>Preparing…</p> }
export default function Example() { return <Status ready={true} /> }
