import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordsLengths from './bootcamp/wordsLengths.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';

const app = express();

app.use(express.static('public'));

// creating middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/api/word_game', function (req, res){

    const sentence = req.query.sentence
    if(!sentence){
        res.json({
          error:'no sentence found'
        })
    }
    res.json({
        "longestWord": longestWord(sentence),
        "shortestWord": shortestWord(sentence),
        "sum": wordsLengths(sentence)
    });
});

let callsCost = 2.75
let smsCost = 0.65

app.post('/api/phonebill/total', function(req, res){
    console.log('called post route')
    
    const bill = req.body.bill
    console.log(req.body)

    res.json({
        total: totalPhoneBill(bill, callsCost, smsCost)
    });
});

app.get('/api/phonebill/prices', function(req, res ){

    res.json({
        call: callsCost,
        sms: smsCost
    })
})

app.post('/api/phoneBill/price', function (req, res) {
    
    const type = req.body.type
    const price = req.body.price

    if (type === 'sms'){
        smsCost = price
    } 
    else if(type === 'call') {
        callsCost = price
    }

    res.json({
        type,price
    });

});

const PORT=6007;
app.listen(PORT, function(){
    console.log("api started on port",PORT)
})