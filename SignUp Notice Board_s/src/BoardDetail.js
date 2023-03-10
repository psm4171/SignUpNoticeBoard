import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from "axios"; 
axios.defaults.withCredentials = true;
const headers = { withCredentials: true};

// 게시글을 조회, 수정, 삭제하는 부분 
class BoardDetail extends Component {
    state = {
        board: [] // 배열 전역변수를 생성 
    }; 

    // 생명주기에서 렌더링이 다 되었을 때 호출되는 함수 
    componentDidMount(){
        if(this.props.location.query !== undefined){
            this.getDetail();
        }else {
            window.location.href="/"; // 메인 페이지로 이동, 로그인 하는 창으로 이동 
        }
    }

    deleteBoard = _id => {
        const send_param = {
            headers, 
            _id 
        }; 
            if(window.confirm("정말 삭제하시겠습니까?")){
                axios
                    .post("http://localhost:8080/board/delete", send_param)
                    .then(returnData => {
                        alert("게시글이 삭제 되었습니다."); 
                        window.location.href="/";
                    })
                    .catch(err=> {
                        console.log(err);
                        alert("글 삭제 실패"); 
                    });
            }
    };
    
    // 글의 세부적인 내용을 조회 
    getDetail = () => {
        const send_param = {
            headers, 
            _id: this.props.location.query._id
            // _id로 게시글을 가져옴 
        };

        axios
            .post("http://localhost:8080/board/detail", send_param)
            .then(returnData => {
                if(returnData.data.board[0]){ // 데이터 상세 페이지 1개만 존재하기 때문에 [0]
                    const board = (
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th> {returnData.data.board[0].title}</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td dangerouslySetInnerHTML={{
                                            __html: returnData.data.board[0].content
                                        }} // 태그를 이용해서 html이 성공적으로 반영할 수 있도록 설정 
                                        ></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div>
                                <NavLink 
                                to={{ pathname: "/boardWrite", query: { title: returnData.data.board[0].title, content: returnData.data.board[0].content, _id: this.props.location.query._id }}}
                                >
                                    <Button>글 수정</Button>
                                </NavLink>
                                        <Button 
                                            onClick={this.deleteBoard.bind(
                                                null, 
                                                this.props.location.query._id // 파라미터에 id값을 넘겨주면서 삭제 기능 
                                                )}
                                                >
                                                    글 삭제 
                                                </Button>
                            </div>
                        </div>
                    );
                    this.setState({
                        board: board //state에 값을 세팅 
                    });
                }else {
                    alert("글 상세 조회 실패");
                }
            })
            .catch(err => {
                console.log(err); 
            });

    };

    // 변경이 있을때마다 return 값 세팅 
    render() {
        const divStyle = {
            margin: 50
        }; 
        return <div style={divStyle}> {this.state.board}</div>;
    }
}

export default BoardDetail;
