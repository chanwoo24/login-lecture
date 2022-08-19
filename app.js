// const express = require("express"); 
// // require 라는 명령어로 express 라는 모듈을 다운 받아준다.
// const app = express();
// // app이라는 변수에다가 express를 실행을 시켜서 변수 안에다가 넣어준다.

// app.get("/", (req, res) => {
//     // 기능
//     res.send("여기는 루트입니다.");    
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인 화면입니다.");
// });

// app.listen(3000, function () {
//     console.log("서버 가동");
// });

// listen이라는 명령어로 서버를 띄울 수 있다.
// 첫 번재 파라미터 : 3000번 포터를 열어달라. 
// 두 번째 파라미터 : call-back 함수를 넘길 수 있다. 
// 일단은 이프마? 스크립트 표준을 따라서 코드를 작성한다.
// lo function이라고 함
// server console 에다가 서버 가동이라고만 단순하게 적고
// 저장(윈도우: ctrl + s 맥: cmd + s) 하겠습니다.  
// 상단에 터미널 메뉴 누르셔서 new terminal 눌러 주시고요
// 그러면 하단에 터미널이 하나 나옵니다.
// 이 directory에서 터미널이 열리게 됩니다. 
// pwd 입력하시면 현재 directory가 잘 표시가 될 겁니다. 
// 여기서 node라는 명령어를 실행시켜서 
// app.js라는 파일을 java script로 읽어 줄 거에요.
// node는 java script 파일을 v8 engine 이라는 것을 사용해서
// app.js에 있는 코드들을 해석해달라는 명령어라고 이해를 하시면 됩니다.
// 이렇게 해서 app.js를 실행시키면
// Error: Cannot find module 'express'라고 나옵니다.
// 이것은 express module이 설치되어 있지 않다는 것입니다.
// 설치는 npm(node pacakage manager)라는 걸로 설치를 하게 될 거구요.
// npm install express 해주는데요.
// 저희는 npm install express -s 라는 것을 해줄 겁니다.
// 이것은 npm install express --save 라는 것과 똑같습니다.
// 일단 이 save라는 명령어를 넣어야 된다 라고 기억을 해주세요.
// 이건 그냥 rule이라고 생각을 해주세요. 
// 입력을 해줘야 저희가 나중에 package.json이라는 파일로
// 저희가 설치한 모듈들을 관리하기가 쉬워져요
// 일단은 그냥 이렇게 해야된다는 것만 기억하시고 따라 할게요.
// 이렇게 설치를 하시면 node_module이랑 package-lock.json 이라는 게
// 설치가 되구요. 이 상태에서 다시 node app.js 를 입력할게요.
// 그럼 이번에는 서버가 잘 가동 됐죠?
// npm install을 하는 순간 
// node_modules라는 폴더 안에 express 라는 모듈이 설치가 돼요.
// 이 express를 가동하기 위해 필요한 module들을 한 번에 다 설치를 해줘요.
// 저희는 이 node_modules가 있음으로 인해서 이 코드 안에서 
// require을 통해서 express 모듈을 찾아올 수 있는 겁니다. 
// 서버가 가동 됐으니 localhost:3000 을 접속해볼게요.
// 그럼 Cannot GET / 라고 표시가 됩니다. 
// 이거는 서버가 잘 켜진 겁니다. 
// 서버가 켜져 있지 않으면 사이트에 연결할 수 없음 이라고 뜨게 됩니다.
// 3001번 포트 들어가보면 됨.
// Cannot GET / 은 서버로 들어오긴 했는데 루트 경로를 찾을 수가 없다
// 라는 말이에요. 그러면 저희가 이 서버에서 루트 경로를 만들어주면 되겠죠?
// app.get() 이라는 걸로 만들어주고요. (지금은 그냥 받아들이세요.)   
// 그래서 저장하시고 서버는 껐다가 키셔야 합니다.
// 실행 중인 프로세스(서버) 종료: ctrl + c  
// 그러면 여기서 "여기는 루트입니다." 라고 잘 표시가 된 것을 알 수 있습니다.
// 이처럼 저희가 경로를 지정해줬더니 해당 경로로 들어왔을 때
// 서버에서 응답해준 메시지를 클라이언트가 잘 받은 것을 알 수 있습니다.
// 저희가 이번에 login이라는 경로를 만들어볼게요. 
// 다시 들어가면 루트고,
// /login 해서 들어가면 Cannot GET /login 라고 뜹니다.
// 왜냐면, /경로를 안 해줬기 때문입니다. (구독)
// 이처럼, 슬래쉬는 꼭 넣어주셔야 합니다.
// 처음에 슬래쉬는 루트를 의미합니다.
// 루트에서 로그인이라는 경로로 빠지면 이 화면으로 이동을 하는거죠.
// 다음에는 express 없이 해볼건데, 
// 우리가 왜 express를 사용해야 하는 지를 배워보겠습니다. 

// const http = require("http");
// // http라는 변수를 받구요. require에서 http라는 것을 다운받아 주겠습니다.
// // 이 http는 내장모듈이에요. 그래서 npm으로 따로 다운 받을 필요는 없습니다.
// // 이 상태로 바로 실행이 가능합니다.

// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     // 내가 보내는 게 text 중에 html이고, character set은 utf-8이니까 
//     // utf-8로 해석을 해 달라. 라고 response(응답)을 해주는 겁니다.
//     // 그러면 이 브라우저가 이 head를 받아서 그렇게 해석을 해줄 거에요.
//     if (req.url === '/') {
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }

// });
// // app이라는 변수를 받아서 http.createServer();라고 해줄게요.

// app.listen(3001, () => {
//     console.log("http로 가동 된 서버입니다.");
// });
// callback 함수 똑같이 넣어주고요. 저장하시고 서버 껐다가 킬게요.
// http로 가된 된 서버입니다. 라고 나오죠?
// 새로고침하면 사이트를 연결할 수 없대요. 
// 3001번 포트를 가동했는데 3000번 포트로 들어와서 그렇습니다.
// 3001번 포트로 가주시면, 무한 로딩이 걸리는데 이거는
// 서버는 열려 있는데 저희가 루트 경로를 지정해주지 않아서 루트 경로를
// 찾지 못해서 계속 빙빙빙 돌고 있는 겁니다. 지금 열려 있는 거에요.
// 서버가 안 열려 있으면 바로 사이트에 연결할 수 없음 이 떠요.
// 저희가 루트 경로를 연결해보겠습니다.
// http.createServer(); 안에 call-back 함수를 입력해서 
// consol.log안에 req.url이라는 거를 넣어볼게요. 
// 그러면 경로들이 출력되는 것을 알 수 있습니다.
// 이 말이 뭐냐면, req.url로 들어오면 
// 루트 경로 이후에 있는 url들을 우리가 passing 해올 수 있다. 라는 말이에요.
// 저는 이것을 조건문을 사용해서 routing을 해줄 수 있을 거 같아요.
// 네 이렇게 루트 경로랑 로그인 화면이랑 routing을 해줬어요.
// 그러면 한글이 깨져서 나오는 것을 알 수 있는데,
// 한글을 제대로 변환하도록 코드를 써줘야 해요. (http를 썼기 때문)
// 여기까지만 해도 express를 써야 하는 이유를 너무나 잘 알겠어요.
// if 문을 넣는 순간 express를 쓴 code에 비해서 code가 너무 지저분해졌어요. 
// 그러면 한글 처리만 어떻게 하는 지만 보고 마치겠습니다.
// 한글 설정을 해주기 위해서는 browser로 한글로 해석을 한다 라고 응답을 해줘야 해요.


"use strict";

// 아래는 모듈
const express = require("express"); 
// require 라는 명령어로 express 라는 모듈을 다운 받아준다.
const app = express();
// app이라는 변수에다가 express를 실행을 시켜서 변수 안에다가 넣어준다.

// 아래는 라우팅
const home = require("./routes/home");

// 앱 세팅
app.set("views","./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

// 지난 시간에 했던 거 싹 다 주석처리 하고, 
// 우리는 이제 express server frame work을 사용해서 개발을 할 거임.
// 여기서 일부러 하드하게 코드를 짜봤음.
// 전혀 효율적이지 않음.
// 이것들을 조금씩 하나 둘 씩, 좋은 코드로 변화시키는 과정을 직접
// 겪게 해드릴 거임. 그래서 안 좋은 코드가 무엇이고, 좋은 코드가
// 무엇인지를 여러분이 알 수 있도록 도와드릴 거임. 
// 여기까지 html 문서를 짜봤고, 다음에는 이거를 모듈화 함으로써
// refactoring 하는 과정을 겪어보도록 하겠습니다.