// Calling in modules
const express = require('express');
const hbs = require('hbs');
const fs = require('fs')

var app = express();

hbs.registerPartials(__dirname + '/views/partials/');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.set('view engine', 'hbs');
// Middleware - Records all activity with routing to a file
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} dsf${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log')
        }
    })
    next()
})
// Maintenance Middleware block
/*
app.use((req,res,next)=>{
    res.render('maintenance.hbs');
});
 */
app.use(express.static('./public'));

// Routing
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Homepage',
        welcomeMessage: 'Hello World'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.get('*', (req, res) => {
    res.send({
        errorMessage: 'This route does not exist.'
    });
});
// Have express listen on port 3000
app.listen(3000, () => {
    console.log('Server is up on port 3000')
});