const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const Item = require("./seller/model");
const itemRouter = require("./seller/router");
// const jwtRouter = require("./auth/router");
// const userRouter = require("./user/router");

const app = express();
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(parserMiddleware);
app.use(itemRouter);
// app.use(userRouter);
// app.use(jwtRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server is runnning on port:" + port));
