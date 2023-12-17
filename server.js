const express = require("express");
const path = require("path");

const app = express();

// express에서 정적 파일 제공
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


// get 요청 시 html 클라이언트로 전송
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));