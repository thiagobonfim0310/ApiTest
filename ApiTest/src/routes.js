const { json } = require('body-parser')
const routes = require('express').Router()
const csv = require('./makeCSV')
const msg = "oii"

var obj= []


routes.post('/colection',(req, res) =>{
    
    
    let  dado = req.query
    console.log(dado)
    dado.data = Date.now()

 

    obj.push(dado)

    //console.log(obj)
    res.send("0k")
    
    
})

routes.get('/realtime', (req, res)=>{

    res.json(obj[obj.length-1])
    console.log(JSON.stringify(obj[obj.length-1]))

    console.log('ok')
})

routes.get('/', (req, res)=>{
    

 
    res.send('ok')
})

routes.get('/download', async(req, res) =>{
    csv('Test', obj)

    console.log('ok')
    res.download('Test.csv', (err)=>{

        console.log(err);
    
    })
    console.log('deu certo')
},)

module.exports = routes