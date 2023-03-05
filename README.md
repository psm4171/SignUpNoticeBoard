# SignUpNoticeBoard

## 리액트를 활용한 회원가입 게시판 프로젝트 

# 설치한 라이브러리 
- npm i react 
- npm i react-bootstrap
- npm i nodemon : 서버 구동을 위한 프레임워크 
- npm i express : 서버를 만들기 위한 프레임워크 express 
- npm i react-router-dom : route 렌더링 활용 

LoginForm에서 로그인 설정(이름, 비밀번호, 이메일)을 통해 새로고침 되면, Body로 이동 후 쿠키값을 통해 BoardForm으로 이동할지, LoginForm으로 이동할지를 결정 

Body.js는 주기능 구현 부분 : 로그인과 회원가입 화면이 바뀌는 부분
Header.js는 로그아웃시 화면변경하는 부분
