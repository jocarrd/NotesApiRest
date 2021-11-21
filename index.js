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

const PORT=3002
app.listen(PORT)
console.log(`Server running on port ${PORT}`)