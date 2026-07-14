const lessons = [{ id: 'jsx', name: 'JSX' }, { id: 'state', name: 'State' }]
export default function Example() { return <ul>{lessons.map(x => <li key={x.id}>{x.name}</li>)}</ul> }
