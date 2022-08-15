# LIVE-CHAT PAGE
+ 목록
  + 사용된 언어 및 프레임워크.
  + 웹소켓

#### 사용된 언어 및 프레임워크
* 기본적으로 웹 프로그래밍에 사용되는 HTML, CSS, JS
* Node.js Express 웹 프레임워크

#### WebSocket 이란?
HTTP와 구분되는 통신 프로토콜로, TCP(Transmission Control Protocol)을 의존,
이유는 연결형 서비스를 제공하고, 전이중 방식의 **양방향 가상 회선** 
이를 제공하는 TCP와 같이 웹소켓 또한 전이중통신(Full-Duplex Communication)지원
요청과 응답 없이, 능동적으로 주고 받을 수 있다.
그래서 웹소켓은 실시간성이 보장되어있다.

HTTP 또한 실시간성을 보장하기 위하여, HTTP Polling, Streaming 과 같은 
다양한 기법들이 활용되었다.


