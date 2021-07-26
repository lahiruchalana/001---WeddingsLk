import styled from "styled-components";
import SideBarAdmin from "./SideBarAdmin";
import Header from "../header/Header";

import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../GlobalState'
import UserItem from '../mainpages/utils/userItem/UserItem'
import Loading from '../mainpages/utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'


import Button from '@material-ui/core/Button';
// import PaypalButton from './PaypalButton'

import Aos from "aos";
import 'aos/dist/aos.css';

function AdminProfile() {

    const state = useContext(GlobalState)
    const [users, setUsers] = state.userInfoAPI.users
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.userInfoAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)
    const [totalAdmin, setTotalAdmin] = useState(0)
    const [totalEmployee, setTotalEmployee] = useState(0)


    const handleCheck = (id) =>{
        users.forEach(user => {
            if(user._id === id) user.checked = !user.checked
        })
        setUsers([...users])
    }

    useEffect(() =>{
        const getTotal = () =>{
            const totalAdmin = users.reduce((prev, user) => {
                return  user.role == '1' ? prev + 1 : prev + 0
            },0)

            setTotalAdmin(totalAdmin)

            const totalEmployee = users.reduce((prev, user) => {
                return  user.role == '2' ? prev + 1 : prev + 0
            },0)

            setTotalEmployee(totalEmployee)

        }

        Aos.init({ duration: 2500 });

        getTotal()

    },[users])

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
        <div >
        <Text4>Current Employees</Text4>
        <Product_card data-aos="fade-left">
            <Text9>Number of Working Employees</Text9>
            <Text10>{totalEmployee}</Text10>
        </Product_card>
        </div>

        
        <div className="products">
            {
                users.map(user => {
                    return  user.role == 2 ? <UserItem key={user._id} user={user} /> : null
                    // isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    
                })
            } 
        </div>

        <LoadMore />
        {users.length === 0 && <Loading />}


        <Text4>Admin Info</Text4>
        <Product_card1 data-aos="fade-left">
            <Text9>Number of Admins</Text9>
            <Text10>{totalAdmin}</Text10>
        </Product_card1>

        
        <div className="products">
            {
                users.map(user => {
                    return  user.role == 1 ? <UserItem key={user._id} user={user} /> : null
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

const Text9 = styled.div`
    font-size: 12px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
`;

const Text10 = styled.div`
    margin-left: auto;
    margin-top: auto;
    font-size: 35px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    width: auto;
    text-align: center;
    margin-top: 5px;
`;

const Product_card = styled.div`
  width: 600px;
  background-color: #370617;
  overflow: hidden;
  height: 100px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 430px;
  margin-top: -25px;
  align-items: center;
`;

const Product_card1 = styled.div`
  width: 600px;
  background-color: #10002b;
  overflow: hidden;
  height: 100px;
  padding: 15px;
  box-shadow: 0 0 15px black;
  position: relative;
  left: 430px;
  margin-top: -25px;
  align-items: center;
`;

export default AdminProfile;