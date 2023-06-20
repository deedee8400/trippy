const express = require ('express')
const mysql = require ('mysql2')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'BookForm',
    port:3406

})

db.connect((err)=>{
    if(err){ throw err}
    console.log('connected')
})
app.post('/booking_form', (req, res)=> {
    
    const values = [
        req.body.full_name,
        req.body.email,
        req.body.phone_number,
        req.body.date_of_book,
        req.body.how_many_person,
        req.body.which_tour_you_want_to_join
    ]
    const sql = `INSERT INTO booking_form (full_name, email, phone_number, date_of_book, how_many_person,which_tour_you_want_to_join) VALUES (?)`;

    console.log(values)
    db.query(sql, [values], (err, data) =>{
        if (err) return res.json(err);
        return res.json (data);
    })
})

app.listen (8081, ()=>{
    console.log('listening....');
})