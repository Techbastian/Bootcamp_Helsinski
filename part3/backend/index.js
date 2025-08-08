const express = require("express");
// const http = require("http");

const app = express();
//habilitamos la app para poder usar json parser, lo que me permite tener disponible el cuerpo de la informacion que estoy mandando al hacer post
app.use(express.json());

let notes = [
  {
    id: "1",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    content:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    important: false,
  },
  {
    id: "2",
    title: "qui est esse",
    content:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    important: true,
  },
  {
    id: "3",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    content:
      "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
    important: false,
  },
  {
    id: "4",
    title: "eum et est occaecati",
    content:
      "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
    important: false,
  },
  {
    id: "5",
    title: "nesciunt quas odio",
    content:
      "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
    important: true,
  },
];

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get("/", (reques, response) => {
  response.send("<h1>Hello world</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);
  //condicional que verifica que haya un resultado para mostrar en pantalla
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  //console.log(request);
  const note = request.body;

  //validacion de contenido
  if(!note || !note.content){
    return response.status(400).json({
      error: 'No se envio ningun contenido'
    })
  }
  
  const ids = notes.map(note => note.id)
  const maxId = Math.max(...ids)

  const newNote = {
    id: maxId + 1,
    title: note.title,
    content: note.content,
    important: note.important !== undefined ? note.important : false
  }

  notes = [...notes,newNote]

  response.status(201).json(newNote);
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
