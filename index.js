const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.post('/bfhl', (req, res) => {

    var arr = req.body.data;
    const digit = [];
    /*arr.map((e)=>{
        var a = (parseInt(e));
        console.log(a);
        if(a != NaN) {
            digit.push(a);
        }
    })
    console.log(digit);*/
    var number = arr.filter(numbersOnly);
    var alphabetsarr = arr.filter(alphabets);

    function alphabets(value) {
        if(typeof(value) === 'string') {
            return value;
        }
    }
    function numbersOnly(value) {
        if (typeof (parseInt(value)) == 'number') {
            return value;
        } 
    }
    console.log(number);
    console.log(alphabetsarr);
    const user = {
        "is_success": true,
        "user_id": "john_doe_17091999",
        "email": "john@xyz.com",
        "roll_number": "ABCD123",
        "number": number,
        "alphabets": alphabetsarr
    }

    res.send(user);
});

app.listen(PORT, () =>{
    console.log(`app is running on http://localhost:${PORT}`);
})
