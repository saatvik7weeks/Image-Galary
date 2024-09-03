const express=require('express')
const app=express();
const path=require('path');
const userModel=require('./models/user');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('first.ejs');
});
app.post('/create',async(req,res)=>{//sabu users create hele database re
    let createuser= await userModel.create({
        username:req.body.name ,
        email:req.body.email    ,
        imageurl:req.body.image 
    })      
    res.redirect('/read')   
});
app.get('/read', async(req,res)=>{
    let allusers= await userModel.find()
    res.render('read.ejs',{users:allusers});
});
app.get('/delete/:id',async(req,res)=>{
    let users=await userModel.findOneAndDelete({_id:req.params.id})
     res.redirect('/read')
        })
app.get('/edit/:id',async(req,res)=>{
    let users=await userModel.findOne({_id:req.params.id})
     res.render('edit.ejs',{users:users})
        })
app.post('/update/:id', async (req, res) => {
    await userModel.findByIdAndUpdate(
        req.params.id,
        {
            username: req.body.name,
            email: req.body.email,
            imageurl: req.body.image
        },
        { new: true }
    );
    res.redirect('/read');
});





app.listen(3000,()=>{
    console.log("server listening on port 3000")
});