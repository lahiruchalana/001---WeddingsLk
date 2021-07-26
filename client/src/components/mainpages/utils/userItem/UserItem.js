import React, {useEffect} from 'react'
import styled from 'styled-components';
// import BtnRender from './BtnRender'
import Button from '@material-ui/core/Button';
import Aos from "aos";
import 'aos/dist/aos.css';

function UserItem({user, isAdmin, deleteProduct, handleCheck}) {

    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])

    return (
        <Product_card>
            {/* {
                isAdmin && <input type="checkbox" checked={user.checked}
                onChange={() => handleCheck(user._id)} />
            } */}
            {/* <img src={product.images.url} alt="" /> */}

            <div data-aos="fade-left" className="product_box">
                <h1 data-aos="fade-left" name={user.name}>{user.name}</h1>
                


                {/* ///////////// add here phone number for role (role -> phone number)/////////// */}
                { user.role === 0 ? <span>User Role: Customer </span>
                :   user.role === 1 ? <span>User Role: Admin </span> 
                    : <span>User Role: Employee</span>
                    
                }

                <h5>{user.email}</h5>
                <h5>0{user.contactFirst}</h5>
                <h5>0{user.contactSecond}</h5>

                <h6>{user.updatedAt}</h6>

                <br></br>

                {/* ////////////////////List down a cart with users vendor prodoucts  ( SEE DOWN )/////////////////////// */}
                {/* /////////////// ( SEE DOWN ) //////////////// */}
              
                {/* <div>{user.cart.map(cart => {
                    return( 
                    <>
                        <div>
                            <h3>{cart.title}</h3>
                            <div>Rs: {cart.price}</div>
                            <Button variant="contained" color="secondary" color="white">
                                        Not Completed
                            </Button>
                            <br></br>
                        </div>
                    </>
                )})}</div> */}




            </div>

            {/* //////////// buttons unvisible //////////////// */}
            {/* <BtnRender product={product} deleteProduct={deleteProduct} /> */}


        </Product_card>
    )
}

const Product_card = styled.div`
  width: 400px;
  overflow: hidden;
  height: 200px;
  padding: 15px;
  box-shadow: 0 0 15px rgb(104, 7, 104);
  margin: 10px 0;
  position: relative;
`;

export default UserItem
