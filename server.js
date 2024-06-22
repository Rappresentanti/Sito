const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connessione a MongoDB
mongoose.connect('mongodb://localhost:27017/tuo_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    email: String,
    name: String
});

const User = mongoose.model('User', userSchema);

// Configura nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tuoemail@gmail.com',
        pass: 'tuapassword'
    }
});

// Rotta per gestire la registrazione degli utenti
app.post('/iscriviti', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        name: req.body.name
    });

    newUser.save()
        .then(() => {
            const mailOptions = {
                from: 'tuoemail@gmail.com',
                to: newUser.email,
                subject: 'Benvenuto!',
                text: `Ciao ${newUser.name}, grazie per esserti registrato!`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).send(error.toString());
                }
                res.status(200).send('Registrazione completata e email inviata');
            });
        })
        .catch(err => res.status(500).send(err.toString()));
});

app.listen(3000, () => {
    console.log('Server in esecuzione sulla porta 3000');
});