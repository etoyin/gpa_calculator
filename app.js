const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = require("./modules/router");
app.use(cors());


app.use(bodyParser.json());

app.use("/api/calculate", router);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})