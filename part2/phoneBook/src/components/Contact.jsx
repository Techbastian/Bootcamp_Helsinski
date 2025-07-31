const Contact = ({ person }) => {
  return (
    <div>
      <strong>{person.name}:</strong> {person.number}
    </div>
  )
}

export default Contact