import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from "axios"; 
import $ from "jquery"; 
import {} from "jquery.cookie"; 
axios.defaults.withCredentials = true;
const headers = { withCredentials: true};

class BoardDetail extends Component {
    state = {
        board: []
    }; 

    // 생명주기에서 렌더링이 다 되었을 때 호출되는 함수 
    componentDidMount(){
        if(this.props.location.query !== undefined){
            this.getDetail();
        }else {
            window.location.href="/";
        }
    }

    deleteBoard = _id => {

    }
    
    getDetail = () => {
        const send_param = {
            headers, 
            _id: this.props.location.query._id
            // _id로 게시글을 가져옴 
        };

        axios
            .post("http://localhost:8080/board/detail", send_param)
            .then(returnData => {
                if(returnData.data.board[0]){
                    const board = (
                        <div>
                            <Table 
                        </div>
                    )
                }
            })
    }
}
