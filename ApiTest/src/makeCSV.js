const createCsvWriter = require('csv-writer').createObjectCsvWriter


const makeCsv = (name, array) => {

    const csvWriter = createCsvWriter({
        path: name + '.csv',
        header: [
            {id:"Gasolina",title:"Gasolina"},
            {id:"RPM", title:"RPM",},  
            {id:"Velocidade",title:"Velocidade"},
            {id:"Pressa_de_Freio",title:"Pressa de Freio"}, 
            {id:"Temp_CVT", title:"Temp CVT" },
            {id:"Temp_Motor",title:"Temp Motor"}, 
            {id:"Acelerometro",title:"Acelerometro" }  
        ]
    });
     
    
    csvWriter.writeRecords(array)       // returns a promise
        .then(() => {
            console.log('...Done');
        });

}

module.exports = makeCsv



