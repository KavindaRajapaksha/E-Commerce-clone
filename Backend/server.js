const express=require('express');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const dotenv=require('dotenv');

const app=express();
require('dotenv').config(); //new syntax


const PORT=process.env.PORT || 6000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

// app.get('/',(req,res)=>{
//     res.json({message:"Welcome to my website"});
// });

// mongodb+srv://KavindaRajapaksha:I52ExQcnWAHgc19a@cluster0.ijyfgr0.mongodb.net/
const URL=process.env.DATABASE_URL;
const ConnectMongoDB = (URL) => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(URL);
      console.log("Successfully Connected to MongoDB");
    } catch (err) {
      console.log("MongoDB Connection Failed");
    }
  };
  
  ConnectMongoDB(URL);

  //routes
  const userRoute=require('./routes/auth.js');
  app.use('/api',userRoute);

 const adminRoute=require('./routes/admin/auth.js');
  app.use('/api',adminRoute);