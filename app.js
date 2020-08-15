const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const router = require("./modules/router");
app.use(cors());


app.use(bodyParser.json());

app.use("/api/calculate", router);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.jresolve(__dirname, "client", "build","index.html"));
  })
}

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
})