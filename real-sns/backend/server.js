//puyo~でログインする
const express = require("express");
const app = express();
const PORT = 5000;
const route = require("./routes/users");
const authRoute = require("./routes/auth"); //default exportsと同じ値にする
const postRoute = require("./routes/post");
const mongoose = require("mongoose");
//データべ―ス接続
mongoose
  .connect(
    "mongodb+srv://user:abc@cluster0.b3jpng4.mongodb.net/realsns?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB接続");
  })
  .catch((e) => {
    console.log(e);
  });

const lisports = app.listen(PORT, () => {
  console.log("起動した");
});
app.use(express.json()); //json形式でデータを取り扱う

// app.use("/api/route",route)//localhostの後ろに続くパス
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", route);



app.get("/", (req, res) => {
  res.send("helloExpress");
});
// app.get("/user",(req,res)=>{
//     res.send("usershelloExpress");

// })
