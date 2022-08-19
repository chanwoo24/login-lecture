"use strict";

const app = require("../app");
// 포트 지정
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});