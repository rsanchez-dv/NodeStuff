const express = require('express');

var app = express();

app.get('/',(req,res) => {
    res.send({
        name: 'Roberto Sanchez',
        title: 'app response'
    });
});

app.get('/users',(req,res)=>{
    res.send([
        {
            name: 'Roberto Sanchez',
            rank: '22'
        },{
            name: 'Johnson Josh',
            rank: '17'
        },{
            name: 'ASDF',
            rank: '0'
        }
    ]);
});

app.listen(3000);

module.exports.app = app;