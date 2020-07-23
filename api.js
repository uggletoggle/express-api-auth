const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('./models/user');
const environment = require('./environment/environment');

//Conexion a base de datos Mongo Atlas
const db = `mongodb+srv://${environment.USER}:${environment.PASSWORD}@mongo-db.yl6zh.mongodb.net/${environment.DB}?retryWrites=true&w=majority`;

mongoose.connect(db, error => {

    if (error) {
        console.error('Error!' + error);
    } else {
        console.log(('Connected to mongo-db'));
    }

});

router.get('/', (req, res) => {

    res.send('Get from API route');

});

router.post('/register', (req, res) => {

    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {

        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    });
});

router.post('/login', (req, res) => {

    let userData = req.body;

    User.findOne({ email: userData.email }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password');
            } else {
                res.status(200).send(user);
            }
        }
    });
});

module.exports = router;