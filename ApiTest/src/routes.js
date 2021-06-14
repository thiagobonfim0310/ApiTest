const { json } = require('body-parser')
const routes = require('express').Router()
const csv = require('./makeCSV')
const msg = "oii"
const serialport = require('serialport')

var obj= []

// const port = new serialport(
//     'COM9',
//     {baudRate: 9600}
// )

// const parser = new serialport.parsers.Readline()

// port.pipe(parser)

// parser.on('data', (data)=> {
//     console.log(data)
//     if(data  != '\r'){
//         // let formatData = data.split('\x01\00')
//         // let splitData = formatData[1].split("|")
//         // let lastData = splitData[splitData.length-1].split('\r')
//         // splitData.pop()
//         // splitData.push(lastData[0])
        
//         //     console.log(splitData)
//     }
// })

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

    //Gerar arquivo dinamicamente
// var text = ''

// obj.forEach(element => {
//     values= Object.values(element)

//     values.forEach(value => {
//         text =text + ' '+ value
//         console.log(text)
//     })
//     text = text +'\n'

//     console.log(values)
// })


//     await csv('Test-file.txt', text)

    console.log('ok')
    res.download('Test.txt', (err)=>{

        console.log(err);
    
    })
    console.log('deu certo')
},)

module.exports = routes