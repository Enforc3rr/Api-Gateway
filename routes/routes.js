const express = require("express");
const router = express.Router();

router.route("/:api",(req,res)=>{
    console.log(req.params.api);
});

module.exports = router;