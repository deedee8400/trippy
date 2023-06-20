// const express = require ('express')
// const mysql = require ('mysql')
// const cors = require('cors')

// const app = express()
// app.use(cors());
// app.use(express.json());

// const db =mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'BookForm'
// })

// app.post('./BookForm', (req, res)=> {
//     const sql = "INSERT INTO BookForm ('Full_Name', 'Email', 'Phone_Number,'Date_of_book', 'How_Many_Person') Values(?)";
//     const values = [
//         req.body.Full_Name,
//         req.body.Email,
//         req.body.Phone_Number,
//         req.body.Date_of_book,
//         req.body.How_Many_Person,
//         // req.body.Message,
//     ]
//     db.query(sql, [values], (err, data) =>{
//         if (err) return res.json(err);
//         return res.json (data);
//     })
// })

// app.listen (8081, ()=>{
//     console.log('listening....');
// })