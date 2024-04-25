// const express = require('express')
// require('dotenv').config()
// const app = express()

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/twitter',(req, res)=>{
//     res.send("hello from Twitter page")
// }) 
// app.get('/login',(req, res)=>{
//     res.send('<h1>Please login at chai aur code</h1>')
// })
// app.get('/youtube',(req,res)=>{
//     res.send('<h1>hello from youtube</h1>')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from "express";

const app = express();
// app.get('/',(req, res)=>{
//     res.send("server is ready")
// });

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title: "A Joke",
            content: "This is a first joke"
        },
        {
            id:2,
            title: "A Joke",
            content: "This is a second joke"
        },
        {
            id:3,
            title: "A Joke",
            content: "This is a third joke"
        },
        {
            id:4,
            title: "A Joke",
            content: "This is a fourth joke"
        },
        {
            id:5,
            title: "A Joke",
            content: "This is a fifth joke"
        }
    ];
    res.send(jokes)

});

const port = 3000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})