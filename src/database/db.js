// importar a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

// Criar o projeto que irá fazer as operaçoes no banco de dedos
const db = new sqlite3.Database("./src/database/database.db")


module.exports = db

// //utilizar objetos de banco de dados
db.serialize(() => {
//     //Criar uma tabela
//     db.run(`
//     create table if not exists places (
//         id integer primary key autoincrement,
//         image TEXT,
//         name,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `)

//     // inserindo dados na tabela
//     const query = `
//         INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state, 
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?)
//  `

//     const values = [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEe5JvT3xJztgz9T7PjxlrRf8AMVX9GqDlW00m0VjJEGlNHgZV&usqp=CAU",
//         "Colectoria",
//         "Organizações Tabajara, Barreiro",
//         "Número: 69",
//         "Minas Gerais",
//         "Belo Horizonte",
//         "Papéis e papelão"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//   db.run(query, values, afterInsertData)

//     //Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui está seus registros: ")
    //     console.log(rows)
    // })


    //Deletar um dado na tabela
    // db.run(`DELETE FROM places where id = ?`, [11], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso! ")
    // })

}) 