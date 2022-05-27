const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");


 const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "facul",
}); 

app.use(cors());
app.use(express.json()); 

 app.post("/register", (req, res)=>{
   const { nome } = req.body;
   const { nascimento } = req.body;
   const { nacionalidade } = req.body;

   let SQL = "INSERT INTO registro ( nome, nascimento, nacionalidade) VALUES (?, ?, ?)";

   db.query(SQL, [nome, nascimento, nacionalidade], (err, result) => {
       console.log(err);
   })

});

app.get("/getCards", (req, res) =>{

    let SQL = "SELECT * from registro";

    sb.query(SQL, (err, result) =>{
        if(err) console.log(err);
        else res.send(result);
    })
})
 

/* APP.GET <= puxar valores */
/* APP.POST  <= Enviar */
/* App.DELETE <= deletar */
/* App.PUT <= Editar */

/* <req = "request" - tudo que vai entrar
 res = "result" - tudo que vai sair */
/*   app.get('/', (req, res) => {
    res.send("hello word");
})   */


app.listen(3001, () => {
    console.log("rodando servidor");
});