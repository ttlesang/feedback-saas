import { useState } from 'react'

function App() {
  const [ideaTitle, setIdeaTitle] = useState('')
  const [ideas, setIdeas] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedTitle = ideaTitle.trim()

    if (!trimmedTitle) {
      return
    }

    setIdeas((currentIdeas) => [
      ...currentIdeas,
      { id: Date.now(), title: trimmedTitle },
    ])
    setIdeaTitle('')
  }

  return (
    <main className="app">
      <section className="panel">
        <h1>Feedback Hub</h1>

        <form className="idea-form" onSubmit={handleSubmit}>
          <label htmlFor="idea-title">Idea title</label>
          <div className="form-row">
            <input
              id="idea-title"
              type="text"
              value={ideaTitle}
              onChange={(event) => setIdeaTitle(event.target.value)}
              placeholder="Idea title"
            />
            <button type="submit">Submit</button>
          </div>
        </form>

        <ul className="idea-list">
          {ideas.map((idea) => (
            <li key={idea.id}>{idea.title}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
