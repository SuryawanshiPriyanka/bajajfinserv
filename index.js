const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.post('/bfhl', (req, res) => {

    var arr = req.body.data;
    const digit = [];
    const alphabets = [];

    arr.map((e)=>{
        var a = (parseInt(e));
        if(!isNaN(a)) {
            digit.push(a);
        } else {
            alphabets.push(e);
        }
    })

    const user = {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "number": digit,
        "alphabets": alphabets
    }
    res.send(user);
});

app.listen(PORT, () =>{
    console.log(`app is running on http://localhost:${PORT}`);
})