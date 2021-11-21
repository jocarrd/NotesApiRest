const http= require('http')


let json= [{"id" : 1, "content" : "esto es una prueba"}]

const app= http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type': 'aplication/json'})
    response.end(JSON.stringify(json))
})

const PORT=3002
app.listen(PORT)
console.log(`Server running on port ${PORT}`)