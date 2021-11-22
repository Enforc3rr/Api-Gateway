const express = require("express");
const app = express();

app.use(express.json);

app.use("/fakeapi",((req, res, next) => {
    return res.send("Hello From Fake API server");
}));


const PORT = process.env.PORT || 8001;
app.listen(PORT , ()=>console.log(`Fake-API Server started on port ${PORT}`));