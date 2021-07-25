import styled from "styled-components";
import SideBarEmployee from "./SideBarEmployee";
import Header from "../header/Header";
import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import UserItem from '../utils/userItem/UserItem'


const EmployeeProfile = (props) => {

    const state = useContext(GlobalState)
    const [user, setUser] = state.userAPI.user
    
    // const [users, setUsers] = state.userInfoAPI.users
    // const [isAdmin] = state.userAPI.isAdmin
    // const [token] = state.token
    // const [callback, setCallback] = state.userInfoAPI.callback
    // const [loading, setLoading] = useState(false)
    // const [isCheck, setIsCheck] = useState(false)

    return (
        <Container>
                <Header/>
                <SideBarEmployee/>
            <Content>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                {/* <div>{ user.get(user => {
                    return <hi>{user.name}</hi>
                })}</div> */}


            </Content>
        </Container>   
    );
};

const Container = styled.div`

`;

const Content = styled.div`
margin-left: 250px;
margin-right: 50px;
`;

const Bg = styled.div`
    min-height: 1500px;
    width: 100%;
    background-color: #FFF;
`;


export default EmployeeProfile;