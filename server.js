const express = require('express');
const app = express();
const PORT = 8080;
// WebSocket Library
const { WebSocketServer } = require('ws');
// html파일과 같이 직접 값에 변화를 주지 않는 정적 파일을 express.static으로 제공
app.use(express.static("public"));

app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`);
})

const wss = new WebSocketServer({port: 8090,});

// Connection
wss.on('connection', (ws, request) => {
    wss.clients.forEach(client => {
        // List가 아닌 Set이라 length가 아닌 Size
        client.send(`새로운 유저가 접속하였습니다. 현재 유저 : ${wss.clients.size} 명`)
    })
    ws.on('close', ()=>{
        wss.clients.forEach(client =>{
            client.send(`유저가 떠났습니다. 현재 유저 : ${wss.clients.size} 명`)
       });
    });
    ws.on('message', (data) =>{
        wss.clients.forEach(client=>{
            client.send(data.toString());
        })
    })
})