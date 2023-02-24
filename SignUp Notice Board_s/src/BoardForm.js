// 글목록 리스트를 보여주는 곳 
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from "axios"; 
import $ from "jquery"; 
import {} from "jquery.cookie"; 
axios.defaults.withCredentials = true;
const headers = { withCredentials: true};

class BoardForm extends Component{

    state = {
        board: []
    };

    getBoard = _id => {
        const send_param = {
            headers,
            _id
        };

        axios   
            .post("http://localhost:8080/board/detail", send_param)
            .then(returnData => {
                if ( returnData.data.board[0]){
                    const board = (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>returnData.data.board[0].title </th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </Table>
                    );
                    this.setState({
                        board: board
                    });
                } else {
                    alert("글 상세 조회 실패");
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    // 날짜와 글 목록을 두개로 분리, 특정 글을 눌렀을 때, 글의 정보를 불러오기 위해 값을 파라미터로 설정 (NavLink to) 
    redner(){

        return(
            <tr>
                <td>
                    <NavLink 
                        to={{ pathname: "/board/detail", query: { _id: this.props._id} }} // 묶어서 id값을 BoardDetail로 보냄 
                        >

                            {this.props.createdAt.substring(0,10)}
                        </NavLink>
                </td>
                <td>
                    <NavLink    
                       to={{ pathname: "/board/detail", query: { _id: this.props._id} }} 
                       >

                           {this.props.title}
                       </NavLink>

                </td>
            </tr>

        );
    }
}

export default BoardForm;
