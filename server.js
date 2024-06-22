const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/newsletter', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for users
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', userSchema);

// POST endpoint to register a new user
app.post('/api/register', async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

// Function to send emails
async function sendNewsletter() {
  const users = await User.find({});
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  users.forEach(user => {
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: user.email,
      subject: 'Newsletter Update',
      text: 'Here are the latest updates...'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
}

// Call sendNewsletter() at desired intervals
// setInterval(sendNewsletter, 86400000); // Example: send every 24 hours

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});