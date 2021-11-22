const express = require("express");
const router = express.Router();
const axios = require("axios");

router.all("/:api",(req,res)=>{
    // console.log(req.params.api);
    axios.get(`http://localhost:8001/${req.params.api}`)
        .then(response =>{
            console.log(response.data);
            return res.send(response.data);
        })
        .catch(error=>{
            return res.send(error);
        });
});

module.exports = router;