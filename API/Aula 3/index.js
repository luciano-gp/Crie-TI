const fs = require('fs');

const filename = "students.json";

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    } else {
        data = JSON.parse(data);
    }

    const Jenna = data.find(element => element.name == 'Jenna Cannon')
    Jenna.is_active = true;

    const Tricia = data.find(element => element.name == 'Tricia Moon');
    Tricia.age = 45;

    const content = JSON.stringify(data);

    console.log(content);

    escrever(content)
})

function escrever(content) {
    fs.writeFile("students.json", content, (error) => {
        if (error) {
            throw err;
        }
        console.log("arquivo gravado");
    })
}

