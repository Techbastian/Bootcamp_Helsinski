import { useEffect, useState } from 'react'
import Note from './Note.jsx'

const Notes = () => {

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Aquí puedes realizar efectos secundarios, como llamadas a API
        setLoading(true)
        setTimeout(() => {
        fetch('http://localhost:3001/notes')
            .then(response => response.json())
            .then(data => {
                setNotes(data)
                setLoading(false)
            })
        }, 2000) // Simulando un retraso de 2 segundos para la carga
    }, [])


  return (
    <div>
        {
            loading && <p>Cargando notas...</p>
        }
      {notes.map(note => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  )
}

export default Notes