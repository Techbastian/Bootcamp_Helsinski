import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './Note'

const NotesAxios = () => {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    axios.get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching notes:', error)
        setLoading(false)
      })
    }, 2000) // Simulating a 2-second delay for loading
  }, [])

  return (
    <div>
      {loading && <p>Cargando notas...</p>}
      {notes.map(note => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  )
}

export default NotesAxios