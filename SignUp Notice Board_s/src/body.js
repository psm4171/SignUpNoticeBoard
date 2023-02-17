// 주기능 구현 부분 : 로그인과 회원가입 화면 구성 
import { Route } from "react-router-dom"; 
import $ from "jquery";
import {} from "jquery.cookie"; 

class Body extends Component {
    render(){
        let resultForm; 
        function getResulForm(){
         
            if($.cookie("login_id")){
                // 쿠키값이 있으면 글쓰기 목록 리스트가 나오는 화면 게시글 목록 리스트가 나오는 화면을 넘김  
                resulForm = <Route exact path="/" component={BoardForm}> </Route>; 
                return resultForm; 
            }else{
                resultForm = <Route exact path="/" component={loginForm}></Route>;
                return resultForm;
            }
        }
        getResultForm();
    }

    
}
