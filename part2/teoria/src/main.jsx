import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id: 1,
    title: 'HTML is easy',
    content: 'HTML is easy',
    date: '2023-01-01',
    important: true
  },
  {
    id: 2,
    title: 'JavaScript is powerful',
    content: 'Browser can execute only JavaScript',
    date: '2023-01-02',
    important: false
  },
  {
    id: 3,
    title: 'HTTP methods',
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2023-01-03',
    important: true
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App notes={notes} />
  </StrictMode>,
)
