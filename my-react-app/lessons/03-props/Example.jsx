function Card({ title, children, tone = 'plain' }) { return <article data-tone={tone}><h2>{title}</h2>{children}</article> }
export default function PropsExample() { return <Card title="Props" tone="info"><p>Data flows down.</p></Card> }
