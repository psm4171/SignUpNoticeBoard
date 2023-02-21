// 주기능 구현 부분 : 로그인과 회원가입 화면이 바뀌는 부
import React, { Component } from "react"; 
import LoginForm from "./LoginForm"; 
// 아직 미구현 상태 
//import BoardForm from "./BoardForm"; 
//import BoardWriteForm from "./BoardWriteForm"; 
//import BoardDetail from "./BoardDetail"; 
import { Route } from "react-router-dom"; 
import $ from "jquery";
import {} from "jquery.cookie"; 

class Body extends Component {
    render(){
        let resultForm; 
        function getResulForm(){
            console.log($cookie("login_id"));  // id값이 있는지 확인하기 위해 console.log
            if($.cookie("login_id")){
                // BoardForm: 글쓰기 목록 리스트가 나오는 화면 , 쿠키값이 있으면 게시글 목록 리스트가 나오는 화면을 넘김  
                // exact path를 안하면 메인 페이지가 붙어서 나오기 때문
                resulForm = <Route exact path="/" component={BoardForm}> </Route>; 
                return resultForm; 
            }else{
                resultForm = <Route exact path="/" component={loginForm}></Route>;
                return resultForm;
            }
        }
        getResultForm();
        return(
            <div>
                <Route path="/boardWrite" component={BoardWriteForm}></Route> 
                <Route path="/board/detail" component={BoardDetail}></Route>
                {resultForm}
            </div>
        );
    } 
}

export default Body;
