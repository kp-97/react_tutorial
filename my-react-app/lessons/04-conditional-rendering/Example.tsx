function Status({ ready }: { ready: boolean }) { return ready ? <p>Ready!</p> : <p>Preparing…</p> }
export default function Example() { return <Status ready={true} /> }
