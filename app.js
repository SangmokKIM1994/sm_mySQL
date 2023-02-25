const cookieparser = require('cookie-parser')
const express = require("express");
const errorMiddleware = require("./middlewares/error.middleware")
const app = express();
const port = 3000;

const router = require("./routes");

app.use(express.json());
app.use(cookieparser());

app.use("/", router)

app.use((error, req, res, next) => {
    return res.status(error.code||400).json({ message: error.message || "서버 에러."});
});

app.listen(port, () => {
    console.log(port, "포트로 서버가 열렸어요!")
})