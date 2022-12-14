const express=require('express')
const connectDB = require('./config/db')
const app=express()


connectDB()

app.use(express.json())
app.use('/users',require('./routes/user'))

const port=process.env.PORT || 5000
app.listen(port,()=>console.log(`server running on port ${port}`))