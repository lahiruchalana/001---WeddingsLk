import styled from "styled-components";
import SideBarAdmin from "./SideBarAdmin";
import Header from "../header/Header";

import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import UserItem from '../mainpages/utils/userItem/UserItem'
import Loading from '../mainpages/utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'


import Button from '@material-ui/core/Button';
// import PaypalButton from './PaypalButton'

function AdminProfile() {

    const state = useContext(GlobalState)
    const [users, setUsers] = state.userInfoAPI.users
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.userInfoAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        users.forEach(user => {
            if(user._id === id) user.checked = !user.checked
        })
        setUsers([...users])
    }

    // const deleteProduct = async(id, public_id) => {
    //     try {
    //         setLoading(true)
    //         const destroyImg = axios.post('/api/destroy', {public_id},{
    //             headers: {Authorization: token}
    //         })
    //         const deleteProduct = axios.delete(`/api/products/${id}`, {
    //             headers: {Authorization: token}
    //         })

    //         await destroyImg
    //         await deleteProduct
    //         setCallback(!callback)
    //         setLoading(false)
    //     } catch (err) {
    //         alert(err.response.data.msg)
    //     }
    // }

    // const checkAll = () =>{
    //     products.forEach(product => {
    //         product.checked = !isCheck
    //     })
    //     setProducts([...products])
    //     setIsCheck(!isCheck)
    // }

    // const deleteAll = () =>{
    //     products.forEach(product => {
    //         if(product.checked) deleteProduct(product._id, product.images.public_id)
    //     })
    // }

    if(loading) return <div><Loading /></div>
    


    return (
        <>
        <Container>
            <Header/>
            <SideBarAdmin/>
            <Content>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                {/* ////////////////// category issue comes from (Filters) ///////////////// */}
                {/* <Filters /> */}

                
        {/* {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        } */}

        <Text4>Customer Details</Text4>

        <div className="products">
            {
                users.map(user => {
                    return user.role == 0 ? <UserItem key={user._id} user={user} /> : null
                    // isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>

        <LoadMore />
        {users.length === 0 && <Loading />}


           
            </Content>
        </Container>  
        </>
    )
}

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

const Text4 = styled.div`
    margin-left: 25px;
    font-size: 25px;
    color: rgb(78, 6, 69);
    font-weight: 700;
    text-transform: uppercase;
`;

export default AdminProfile;