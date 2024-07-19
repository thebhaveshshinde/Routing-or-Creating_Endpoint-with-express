// importing the express library 
const express = require("express")

// Creating instance of the express
const App = express()

// importing the database module containing the users data
const users_get = require("./users_get.js")
const users_post = require("./users_post.js")
const users_put = require("./users_put.js")

// Route to handle the Get Request by the client
App.get("/", (req, res) => {
    res.status(200)
        .send("<html><head></head><body><h1>👋Hello Everyone!👋</h1></body></html>")
})

App.get("/users" , ( re , res ) => {
    res.status(200)
    .json(users_get)
 })

// Parsing json to the express App
App.use(express.json())

// Route to handle the post Request by the client
App.post("/userss" , ( req , res ) => {

    const data = req.body
    users_post.push(data)
    
    res.status(201)
    .send(JSON.stringify(data))

    console.log(users_post)
})

// Route to handle the put Request by the client
App.put("/usersss/:id" , ( req , res ) => {
    const id = parseInt(req?.params?.id) 
    const { name } = req.body
    const { department } =req.body

    console.log(users_put)

    const idx = parseInt(users_put.findIndex((users_put) =>users_put.id === id))

    users_put.at(idx).name = name
    users_put.at(idx).department=department

    res.status(203)
    .json(users_put)

    console.log(users_put)
})

// Handling the wrong Request send by the client with 4040 status code
App.use(( req , res )=>{ 
    res.status(404)
    .send("<html><head></head><body><h1>404 Not Found!</h1></body></html>")
})

// Listen the server on the port 2000
App.listen("2000", () => {
    console.log("Server Running on the port 2000")
})
