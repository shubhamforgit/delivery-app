const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
const port = 4000
app.use(cors())

const user = {
    userName : "shubham",
    email : "shubham@gmail.com",
    password : "shubham",
    age: "22"
}
app.get('/login', function (req, res) {
    console.log('recieved')
    jwt.sign({user:user} , 'developer' , (err,token) =>{
        res.json({
            token
        })
    })
}) 
app.post('/login', function (req, res) {
    console.log(req.body)
    jwt.sign({user:user} , 'developer' , (err,token) =>{
        res.json({
            token,
        })
    })
}) 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})