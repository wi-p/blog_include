const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(() => {
    db.run("CREATE TABLE person (name TEXT, age INT)");

    const stmt = db.prepare("INSERT INTO person VALUES (?,?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum ",  i);
    }
    stmt.finalize();

    db.each("SELECT name, age FROM person", (err, row) => {
        console.log(row.name+ ": " + row.age);
    });
});

db.close();