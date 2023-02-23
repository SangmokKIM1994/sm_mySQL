const cookieparser = require('cookie-parser')
const express = require("express");
const errorMiddleware = require("./middlewares/error.middleware")
const app = express();
const port = 3000;

const router = require("./routes");

app.use(express.json());
app.use(cookieparser());

app.use("/", router)

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!")
})