// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'lalitpama.1code@gmail.com', // Your email
    pass: 'cyfb ggpl pqac lugx', // Your email password or app password
  },
});

// Contact route
app.post('/contact', (req, res) => {
  const { name, email, message, contactNumber } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com', // Your email address (the actual sender)
    to: 'your-email@gmail.com', // Replace with your email address (where you want to receive messages)
    subject: `Contact Form Submission from ${name}`,
    text: `You have received a new message from the contact form:\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Contact Number: ${contactNumber ? contactNumber : 'Not provided'}\n` + // Show contact number if provided
          `Message: ${message}\n`,
    replyTo: email, // This will allow you to reply to the user's email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(`Error sending message: ${error.message}`);
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Message sent successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});