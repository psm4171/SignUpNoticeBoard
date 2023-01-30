import React, { Component } from "react"; 
import { Form, Button } from "react-bootstrap"; 
import axios from "axios";
import $ from "jquery"; // 로그인 시 화면이 바뀔 수 있도록 쿠키값 있으면 로그인 처리 화면 
import {} from "jquery.cookie"; 
axios.defaults.withCredentials = true; 
// node.js와 통신을 하기 위해 동일 url이어야 하는데 다른 url에도 
// 접근이 가능하도록 처리하는 부분  
const headers = { withCredentials: true}; // 통신을 할 때마다 url 접근 허용 


class LoginForm extends Component {

    // 회원가입 실행하는 함수 
    join = () => {
        const send_param = {
            headers,
            email: this.joinEmail.value,
            name: this.joinName.value,
            password: this.joinPw.value
        };
        
        axios
            .post("http://localhost:8080/member/join",send_param)
            // 정상수행 
            .then(returnData => {
                if(returnData.data.message){
                    alert(returnData.data.message);
                }else{
                    alert("회원가입 실패"); 
                }   
            })
            .catch(err => {
                console.log(err);
            });
    }; 
    
    // css style 부분 
    render() {
        const fromStyle={
            margin: 50
        }; 
        const buttonStyle={
            marginTop: 5
        };

        return(
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> 
        )
    }

    // 로그인 실행하는 함수 
    login = () => {
        const send_param = {
            headers,
            email: this.loginEmail.value,
            password: this.loginPw.value
        };

        axios
            .post("http://localhost:8080/member/login", send_param)
            .then(returnData => {
                if(returnData.data.message){
                   // console.log("login_id : " + returnData.data._id); 
                    $.cookie("login_id", returnData.data._id); // 쿠키에 로그인 id가 있으면 로그인 처리 
                alert(returnData.data.message);
                window.location.reload();
            }else {
                alert("로그인 실패");
            }
            })

    }
}