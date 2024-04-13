//      DATABASE        //

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');


function createTable(){
    db.serialize(() => {
        db.run("CREATE TABLE Post (title TEXT, content TEXT)");
        db.run("CREATE TABLE Comment (comm TEXT, post_id INT, FOREIGN KEY (post_id) REFERENCES Post(id))");
    })

    console.log("Table created");
}


function insertPost(){
    tit = title.value;
    cont = content.value;

    db.serialize(() => {
        db.run("INSERT INTO Post values (?, ?)",[tit, cont]);
    });

    document.getElementById("title").value = '';
    document.getElementById("content").value = '';

    console.log("Post added");
}

function readPost(){
    db.serialize(() => {
        db.each("SELECT title, content FROM Post", (err, row) => {
            console.log(row.title + " " + row.content);
        });
    });
}


//createTable();
//insertPost();
//readPost();
//insertValue();
//readValue();



//      GET THINGS FROM CLIENT SIDE     //

function getWords(){
    text = words.value;
    document.getElementById("para").innerHTML += '<div class="divcomment"><p> <b>Comentário: </b> ' + text + ' </p></div>';
    document.getElementById("words").value = '';
}