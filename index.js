const { request, response } = require('express')
const express= require('express')
const app= express()

let json= [{"id" : 1, "content" : "esto es una prueba"}]
/*
const app= http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type': 'aplication/json'})
    response.end(JSON.stringify(json))
})
*/

app.get('/',(request,response)=>{
    response.send('<h1>Hello world</h1>')
})

app.get('/api/content',(request,response)=>{
    response.json(json)
})

app.get('/api/content/:id',(request,response)=>{
    const id = Number( request.params.id)
    const content = json.find(content => content.id === id )
    if(content){
    response.json(content)
    }else{
        response.status(404).end()
    }
})

app.delete('/api/content/:id',(request,response)=>{
    const id = Number( request.params.id)
    json = json.filter(note => note.id =! id)
    response.status(204).end


   
})

const PORT=3002
app.listen(PORT , ()=>{console.log(`Server running on port ${PORT}`)})
