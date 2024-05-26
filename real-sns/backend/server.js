//puyo~でログインする
const express = require("express");
const app = express();
const PORT = 5000;
const route = require("./routes/users");
const authRoute = require("./routes/auth"); //default exportsと同じ値にする
const postRoute = require("./routes/post");
const uploadRoute=require('./routes/upload')
const mongoose = require("mongoose");
const path=require("path");
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
//ミドルウェア
app.use("/imges",express.static(path.join(__dirname,"public/imges")))
app.use("/api/posts", postRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", route);

/*app.use("/imges",express.static(path.join(__dirname,"public/imges")))
→静的ファイルに関しては現在のフォルダとimgsを見るよう設定

staticの後に格納フォルダ名を記載する、今回は格納フォルダ指定に以下を使用している
　__dirname→現在のディレクトリのパスを指定している特別な変数
　path→ディレクトリのパスの操作を行える（nodeのモジュール）
joinで
*/

// console.log("pathモジュール",path);
// console.log("dirname",path.dirname('./public/test.html'))



app.get("/", (req, res) => {
  res.send("helloExpress");
});
// app.get("/user",(req,res)=>{
//     res.send("usershelloExpress");

// })
