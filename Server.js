const express = require("express");
const mongoose = require("mongoose");
const app = express();
const user = require("./models/User");
const port = process.env.PORT || 5000;
require("dotenv").config();
const uri = process.env.uri;
app.use(express.urlencoded({extended:false}))

app.use(express.json())
//coonnect
mongoose.connect(
"mongodb+srv://SanaArfaoui:SanaArfaoui@cluster0.fmbko.mongodb.net/checkapi?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("connected sucessfully");
  },
)

//create users
// user.create({
//   firstName:"Ahmed",
//   lastName:"Riabi",
//   age:20,
// }).then((data)=>console.log(data))
// .catch((err)=>console.log(err))
// user.create({
//   firstName:"Elie",
//   lastName:"Saab",
//   age:60
// }).then((data)=>console.log(data))
// .catch((err)=>console.log(err))
/*user.create({
  firstName:"Ons",
  lastName:"Jabeur",
  age:32
}).then((data)=>console.log(data))
.catch((err)=>console.log(err))
user.create({
  firstName:"Oussama",
  lastName:"Mellouli",
  age:35
}).then((data)=>console.log(data))
.catch((err)=>console.log(err))*/
app.get('/api/getUsers', async(req,res)=>{
  try{
    await user.find().then((data)=>{
      res.send(data)
    })
  }catch(err){
    console.log(err)
  }
})
app.post('/api/addUsers', async(req,res)=>{
  try{
    const User = new user({
      firstName:"Islem",
      lastName:"Maghraoui",
      age:13,
    })
    const newUser = await User.save()
    res.status(200).json({
      status: true,
      message:"created successfully",
      data: newUser})
  }catch(error){
    if(error) throw error;
    res.send(400).json({status:false,error})
  }
})
//update user by id
app.put('/api/updateUsers', async(req,res)=>{
  try{
    let {_id} = req.query;
    let {firstName, lastName, age}= req.body
    console.log(_id);
    let myUser= await user.findByIdAndUpdate(_id,{$set:{...req.body}},{new:true})
    console.log(myUser)
    res.status(200).json({
      status: true,
      message:"updated successfully"

    })
    
  }
catch(error){
  if(error) throw error;
  res.status(400).json({status:false,error})
}})

//delete user by id

app.delete("/api/deleteUsers", async(req,res)=>{
  try {
    let {_id} = req.query;
    console.log(_id);
    let myUser2= await user.findByIdAndDelete(_id)
    
    res.status(200).json({
      status: true,
      message:"delete successfully"

    })
  } catch (error) {
    if(error) throw error;
  res.status(400).json({status:false,error})
    
  }
})
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`app is running at http://localhost:${port}`);
});


