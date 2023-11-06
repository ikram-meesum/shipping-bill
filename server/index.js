const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./db");
connectDB();

let port = process.env.PORT || 5000;

app.use("/user", require("./routes/user.route"));
app.use("/invoice", require("./routes/invoice.route"));
app.use("/detail", require("./routes/detail.route"));

app.listen(4000, () => console.log(`server is running on port ${port}`));
