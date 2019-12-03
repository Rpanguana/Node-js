const fs = require('fs');

class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistantName){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.assistantName = assistantName;
        this.index = 0;
    }

save(){

// let visitor = Visitor()
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

let visitor = new Visitor("jose cuervo", 25, '2019-12-16', '09:15', "none", "Rulani Panguana")

// visitor.save()

visitor.load(1)

visitor.loadByName("jose")