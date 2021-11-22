const express = require("express");
const app = express();

app.use(express.json());


app.get("/fakeapi",((req, res, next) => {
    console.log("Fake API");
    return res.send("Hello From Fake API server");
}));

app.get("/fakeapi2",((req, res, next) => {
    console.log("Fake API part 2");
    return res.send("Hello From Fake server part 2");
}));


const PORT = process.env.PORT || 8001;
app.listen(PORT , ()=>console.log(`Fake-API Server started on port ${PORT}`));