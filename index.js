const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use("/",router);


const PORT = process.env.PORT || 8000;
app.listen(PORT , ()=>console.log(`API Gateway started on port ${PORT}`));