const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const Header = (props) => <h1>{props.course}</h1>;

const Content = ({ parts }) => {
    // Calculate the total number of exercises
  const total = parts.reduce((sum, excercise) => sum + excercise.exercises, 0);
  console.log(total);

  return (
    <table>
      <thead>
        <tr>
          <th>Part Name</th>
          <th>Exercises</th>
        </tr>
      </thead>
      <tbody>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
        <tr>
          <th>Total</th>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Part = ({ part }) => (
  <tr>
    <td>
      <strong>{part.name}</strong>
    </td>
    <td>{part.exercises}</td>
  </tr>
);

export default Course;