const express = require('express');
const path = require('path');
const db = require('./db/connection');
const app = express();
const hbs = require('hbs');
const User = require('./models/User');
const { registerPartials } = require('hbs');
const { urlencoded } = require('express');
const port = process.env.PORT || 8000;

// setting the path

const staticPath = path.join(__dirname, '../public');
const template = path.join(__dirname, '../templates/views');
const partial = path.join(__dirname, '../templates/partials');

// add bootstrap
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/jq', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
// console.log(staticPath);

app.use(express.urlencoded({ extended: false }))
app.use(express.static(staticPath));
hbs.registerPartials(partial);

// View Engine Setup
// app.set('views', path.join(__dirname))
app.set('view engine', 'hbs');
app.set('views', template);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});
app.get('/team', (req, res) => {
    res.render('team');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});

// const uname = req.body.uname;
// const email = req.body.email;
// const mobile = req.body.mobile;
// const message = req.body.message;
app.post('/senddata', async(req, res) => {
    try {
        const userdata = new User(req.body);
        await userdata.save();
        res.status(201).render('index')
    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, () => {
    console.log('Server run successfully')
})