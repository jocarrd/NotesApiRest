const { request, response } = require("express");
const express = require("express");
const app = express();
const logger=require("./logger-Middleware")

app.use(express.json());
app.use(logger)




let json = [{ id: 1, content: "esto es una prueba" }];
/*
const app= http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type': 'aplication/json'})
    response.end(JSON.stringify(json))
})
*/
app.get("/", (request, response) => {
  response.send("<h1>Hello world</h1>");
});

// GET ALL
app.get("/api/content", (request, response) => {
  response.json(json);
});

//GET ONE
app.get("/api/content/:id", (request, response) => {
  const id = Number(request.params.id);
  const content = json.find((content) => content.id === id);
  if (content) {
    response.json(content);
  } else {
    response.status(404).end();
  }
});

//DELETE ONE
app.delete("/api/content/:id", (request, response) => {
  const id = Number(request.params.id);
  json = json.filter((note) => (note.id = !id));
  response.status(204).end;
});

//POST
app.post("/api/content", (request, response) => {
  const note = request.body; //Obtención de los parámetros de la petición
  //Busqueda del max id y creación de un id
  if (!note || !note.content) {
    return response.status(400).json({
      error: "note content is missing",
    });
  }

  const ids = json.map((note) => note.id);
  const maxId = Math.max(...ids);
  const newNote = {
    id: maxId + 1,
    content: note.content,
  };
  //Añade la nueva nota a las notas
  json = [...json, newNote];
  response.json(newNote);
});

//Controlamos las direcciones no registradas en la api

app.use((request,response,next)=>{
    response.status(404).json({
        error: "Not Found"
    })
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
