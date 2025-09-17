const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.listen(PORT, () => {
    console.log(`Ready na ang url bes! Access mo na siya dito sa http://localhost:${PORT}`)
});