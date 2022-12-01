const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt=require('jsonwebtoken');
const validator = require('validator'); 
const {User}  = require('../models/dbloginSignup');

router.post('/signup',async(req,res)=>{
    try{
            let error='';
            let {full_name,email,batch,password,secondary_school,high_school,graduate,post_graduate,doctarate}=req.body;
            
            //generate password hash
            const salt=await bcrypt.genSalt(10);// 1st creating salt
            password=await bcrypt.hash(password,salt)
            
            if(full_name=='' && error==''){
                error="Name Missing";
                return res.status(401).json({
                    message:error
                })
            }

            if(email=='' && error==''){
                error="Email Missing";
                return res.status(401).json({
                    message:error
                })
            }
            const emailunique = await User.findOne({email:email});
            console.log(emailunique);
            if(emailunique!=null){
                error="Use unique email";
                return res.status(401).json({
                    message:error
                })
            }
            if(batch=='' && error==''){
                error="Batch missing";
                return res.status(401).json({
                    message:error
                })
            }

            if(password=='' && error==''){
                error="Password Missing";
                return res.status(401).json({
                    message:error
                })
            }

            //secondary_school
            if(secondary_school=='none' && error==''){
                error="Please provide your secondary school name to continue";
                return res.status(401).json({
                    message:error
                })
            }

            //high_school
            if(secondary_school=='none' && error=='' && high_school!='none'){
                error="Please provide your secondary school name";
                return res.status(401).json({
                    message:error
                })
            }
            
            //graduation
            if((high_school=='none' && error=='' && graduate!='none')){
                error="Please provide your high school name";
                return res.status(401).json({
                    message:error
                })
            }
            
            //post-graduation
            if((graduate=='none' && post_graduate!='none' && error=='')){
                error="Please provide your graduation college name";
                return res.status(401).json({
                    message:error
                })
            }

            ///doctarate
            if(post_graduate=='none' && doctarate!='none' && error==''){
                error="Please provide your post-graduation college name";
                return res.status(401).json({
                    message:error
                })
            }
            const user = new User({full_name,email,batch,password,secondary_school,high_school,graduate,post_graduate,doctarate});
            // console.log(user);
            await user.save();
            return res.status(200).json({
            message:"user saved successfully",
            user
            })
    }
    catch(err){
        return res.status(401).json({
           message : "Something went wrong",
           error : err.message
        })
    }
})

router.post('/login',async(req,res)=>{
    try{
          const {email,password}=req.body;
          const user= await User.findOne({email:email});//i.e fatch by the user email/other then id
          if(user){//if got the user
                const verifyuser=await bcrypt.compare(password,user.password);//then compare the pw
                if(verifyuser){
                    const payload={
                    user:{
                        id:user._id
                        //name:user.full_name
                    }
                    }
                    const token=jwt.sign(payload,'hackathon',{expiresIn:36000})
                    res.status(200).json({
                    message:"logged in", 
                    user:{user_id:user._id,email:user.email,secondary_school:user.secondary_school,high_school:user.high_school,graduate:user.graduate,post_graduate:user.post_graduate,doctarate:user.doctarate},
                    token 
                    
                    })
                }else{
                    res.status(401).json({
                        message:"wrong password/username" 
                    })   
                }  
            }
            else{
                res.status(401).json({
                message:"wrong password/username" 
                })   
            }  
        }  
        catch(err){
          res.status(401).json({
             message:"something wend wrong" 
          }) 
        }
     })
module.exports=router;