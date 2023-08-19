const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
 
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", async (req, res) => {
  console.log(req);
  try{
      const name = req.body.firstName + req.body.lastName;
      const email = req.body.email;
      const message = req.body.message;
      const phone = req.body.phone;
      
      const mail = {
      
        from: name,
        to: "abhi1911singh2511@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Phone: ${phone}</p>
              <p>Message: ${message}</p>`,
      };
      await contactEmail.sendMail(mail);
      res.status(200).json({message: 'Message sent successfully'});
  }
  catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(process.env.PORT, () => console.log("Server Running on Port:4000"));