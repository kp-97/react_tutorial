const learner = 'John Smith'
const topics = 18
const now: Date = new Date();

// The order doesn't matter.
// Choosing the language determines the order of datetime attributes.
const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
}

export default function JsxExample() {
  return <section className="lesson">
            <h2>{learner ? `Hello ${learner}!` : `Welcome to the course!`}</h2>
            <p>{topics} topics await.</p>
            <p>Datetime: {now.toLocaleDateString('')} </p>
            <p>Datetime (AU): {now.toLocaleString('en-AU', options)}</p>
            <p>Datetime (US): {now.toLocaleString('en-US', options)}</p>
        </section>
}