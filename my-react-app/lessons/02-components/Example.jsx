function Badge() { return <span>New</span> }
function LessonCard() { return <article><Badge /><h2>Components compose</h2></article> }
export default function ComponentsExample() { return <main><LessonCard /></main> }
