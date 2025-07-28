const Contact = ({ person }) => {
  return (
    <div>
      <strong>{person.name}:</strong> {person.phone}
    </div>
  )
}

export default Contact