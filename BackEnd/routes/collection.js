const express = require('express');
const router= express.Router();
const {User}  = require('../models/dbloginSignup');

router.get('/secondary/:name',async(req,res)=>{
    const name = req.params.name;
    console.log(name);
    try{
        const matcheddata = await User.find({secondary_school: name})
        if (matcheddata==''){
            return res.status(200).json({ 
                message: "Alumini joining soon",
            })
        }
        return res.status(200).json({ 
            message: "Products fetched successfully",
            matcheddata
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})
module.exports=router ;