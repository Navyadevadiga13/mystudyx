const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const courseRoutes=require('./routes/courseRoutes');
const adminRoutes=require('./routes/adminRoutes');
const userRoutes=require('./routes/userRoutes');
const cors=require('cors');
const path=require('path');
const nodemailer=require('nodemailer');
//load environment variable
dotenv.config();

//express middlware
const app=express();

//allow access from anywhere
app.use(cors({
  origin: '*', // allow all domains (you can restrict later)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
//mongodb connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch((err) => console.log('MongoDB Connection Error:', err));

// express middlware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//Routes
app.use('/api',courseRoutes);
app.use('/api',adminRoutes);
app.use('/api',userRoutes);

//starting point
app.get('/',(req,res)=>{
    console.log("mystudyX is running");
    res.send("mystudyX is running")
});


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // from .env
    pass: process.env.EMAIL_PASS   // from .env
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Your route uses the above transporter
app.post("/api/send-contact", async (req, res) => {
  const { name, email, phone, comment } = req.body;

  let mailOptions = {
    from: `"${name}" <${email}>`,
    to: "hello@wizx.org",
    subject: "New Contact Us Submission",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${comment}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Your message has been sent! We'll get back to you soon." });
  } catch (error) {
    res.status(500).json({
      message: "There was an error sending your message. Please try again later.",
      error: error.message
    });
  }
});


//start the server
const PORT=process.env.PORT ||3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});
