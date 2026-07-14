const pages: Record<string, string> = { '/': 'Home', '/lessons': 'Lessons' }
export default function Example() { return <h2>{pages[window.location.pathname] ?? 'Not found'}</h2> }
