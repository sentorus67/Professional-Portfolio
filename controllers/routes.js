const express = require('express');
const router = express.Router();

router.get("/", async (req,res) =>{
    try{
        res.render('./views/partials/Aboutme')
    }
    catch(er){
        res.status(500).json(err)
    }

})