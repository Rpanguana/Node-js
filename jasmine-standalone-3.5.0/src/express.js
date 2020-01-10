const express = require('express');
const bodyparser = require('body-parser');
const path= require('path');
const app = express();
const port = 4000;

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended:true}))

app.use(express.static('./newvisit'))

app.set('view engine', 'pug')



app.get('/new_visit', function (request, response) {
    response.sendFile('form.html',{root:path.join(__dirname,'./new_visit')})
})

app.post('/new_visit', function(request,response){
    return response.render('/reply.pug')
})

app.listen(port,()=>console.log('My server is running on http://localhost:' + port + ' yall !!'))

// function convert(){


// let fullName = document.getElementById('fullname').value
// let assistantName = document.getElementById('assistname').value;
// let age = document.getElementById('age').value;
// let date = document.getElementById('date').value;
// let time = document.getElementById('time').value;
// let comments = document.getElementById('comment').value;
// let data = {fullname, assistantName,age,date,time,comments
// }
// console.log(fullName.value);

// }

// convert()

// // visitor name
// // your name (name of the person who assisted the visitor)
// // visitor’s age
// // date of visit
// // time of visit
// // comments


const fs = require('fs');


class Visitor{
    constructor(fullName , assistantName , age , dateOfVisit , timeOfVisit , comments){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.assistantName = assistantName;
        this.index = 0;
    }

save(){
    let jsonString = JSON.stringify(this, null, 4)

    do {
        this.index++;
    } while (fs.existsSync(`Visitors_${this.index}.json`));

    fs.writeFileSync(`Visitors_${this.index}.json`, jsonString, (err) => {
        if (err) throw new error('could not complete action')
        
    });
    console.log(jsonString);
}

load(indx){
let text = fs.readFileSync(`Visitors_${indx}.json`, 'utf-8')
console.log(text);

// let i = 0;
// for ( index[i] in Visitors[this.index].json ) {
//     console.log(this.index[i].visitors[this.index].json)
// }
//index[1].visitors - look for the index of the file to be read.

}

loadByName(name){
let data = fs.readFileSync(Visitor[name], 'utf-8')
console.log(data)

}

}

let visitor = new Visitor("jose cuervo" , "Rulani Panguana", 25, '2019-12-16', '09:15', "none")

// visitor.save()

visitor.load(1)

// visitor.loadByName("jose")