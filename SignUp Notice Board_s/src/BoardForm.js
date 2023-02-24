// 글목록 리스트를 보여주는 곳 
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from "axios"; 
import $ from "jquery"; 
import {} from "jquery.cookie"; 
axios.defaults.withCredentials = true;
const headers = { withCredentials: true};

class BoardRow extends Component{

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


                            
                        </Table>
                    )
                }
            })
    }

    redner(){

        return(



        );
    }
}
