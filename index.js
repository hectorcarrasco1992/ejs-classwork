const express = require('express')
const app = express()
require('dotenv').config()
const logger = require('morgan')
path = require('path')
const fetch = require('node-fetch')
const users = require('./Models/Users.json')


const port = process.env.Port||3000


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'Models')))

app.get('/first',(req,res)=>{
    res.render('main/home',{name:'Bill'})
})

app.get('/location/:color/:car',(req,res)=>{
    const firstName = "hector"
    const lastName = "carrasco"
    let places = [
        {city:'Stamford',state:'Connecticut'},
        {city:'Brooklyn',state:'NY'},
        {city:'Mobile',state:'Alabama'},
        
    ]
    const {color,car}=req.params
    res.render('main/location',{color,car,places,firstName,lastName})
})

app.get('/users',(req,res)=>{
    
    
    res.render('main/users',{users})
})
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))










app.listen(port,()=>{
    console.log(`listening on ${port}`)
})