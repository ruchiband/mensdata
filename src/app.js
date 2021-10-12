const express = require('express');
require("../src/db/conn");

const MensRanking = require("../src/models/mens");
const router = require("../src/routers/men");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
// app.get("/", async(req, res) => {
//     res.send("Hello from the Ruchira.");
// })



app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
})