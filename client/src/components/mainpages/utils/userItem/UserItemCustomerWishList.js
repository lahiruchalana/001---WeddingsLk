import React from 'react'
import styled from 'styled-components';
// import BtnRender from './BtnRender'
import Button from '@material-ui/core/Button';


function UserItem({user, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div>
            { user.role == 1 || user.role == 2 ? '' : 
                user.wish_to_buy.length && user.wish_to_buy_wedding_plans.length === 0 ? null 
                  :
                    <Product_card>
                
                        <div className="product_box">
                            <TextName name={user.name}>{user.name}</TextName>
                            {/* ///////////// add here phone number for role (role -> phone number)/////////// */}
                            <h5>{user.email}</h5>
                            <h5>0{user.contactFirst}</h5>
                            <h5>0{user.contactSecond}</h5>
                            {/* <h6>{user.updatedAt}</h6> */}
                            <br></br>
                            {/* ////////////////////List down a cart with users vendor prodoucts  ( SEE DOWN )/////////////////////// */}
                            {/* /////////////// ( SEE DOWN ) //////////////// */}
                        
                            <div>{user.wish_to_buy.map(wish_to_buy => {
                                return( 
                                <>
                                    <div>
                                        <Text1>{wish_to_buy.title}</Text1>
                                        <Text2>{wish_to_buy.address_line_1}</Text2>
                                        <Text3>Rs: {wish_to_buy.price} - {wish_to_buy.max_price}</Text3>
                                        {/* <ButtonBox>
                                                <Button variant="contained" color="secondary" color="white">
                                                            Not Completed
                                                </Button>
                                        </ButtonBox> */}
                                        <Line1></Line1>
                                        <br/>
                                    </div>
                                </>
                            )})}</div>
                            <div>{user.wish_to_buy_wedding_plans.map(wish_to_buy => {
                                return( 
                                <>
                                    <Text1>{wish_to_buy.title}</Text1>
                                    <div>
                                        <Text4>{wish_to_buy.vendor_1}</Text4>
                                        <Text3>Rs: {wish_to_buy.price_1} - {wish_to_buy.max_price_1}</Text3>
                                        <Text2>{wish_to_buy.address_1}</Text2>
                                        {/* <ButtonBox>
                                                <Button variant="contained" color="secondary" color="white">
                                                            Not Completed
                                                </Button>
                                        </ButtonBox> */}
                                        <br></br>
                                    </div>
                                    <div>
                                        <Text4>{wish_to_buy.vendor_2}</Text4>
                                        <Text3>Rs: {wish_to_buy.price_2} - {wish_to_buy.max_price_2}</Text3>
                                        <Text2>{wish_to_buy.address_2}</Text2>
                                        {/* <ButtonBox>
                                                <Button variant="contained" color="secondary" color="white">
                                                            Not Completed
                                                </Button>
                                        </ButtonBox> */}
                                        <br></br>
                                    </div>
                                    { wish_to_buy.vendor_3 == '' ? '' :
                                        <div>
                                            <Text4>{wish_to_buy.vendor_3}</Text4>
                                            <Text3>Rs: {wish_to_buy.price_3} - {wish_to_buy.max_price_3}</Text3>
                                            <Text2>{wish_to_buy.address_3}</Text2>
                                            {/* <ButtonBox>
                                                <Button variant="contained" color="secondary" color="white">
                                                            Not Completed
                                                </Button>
                                            </ButtonBox> */}
                                            <br></br>
                                            <Line1></Line1>
                                        </div>
                                    }
                                </>
                            )})}</div>
                        </div>
                    </Product_card>
            }
        </div>

    )
}

const Product_card = styled.div`
  width: 900px;
  overflow: hidden;
  height: auto;
  padding: 15px;
  box-shadow: 0 0 15px rgb(5, 97, 5);
  margin: 10px 0;
  position: relative;
`;

const Line1 = styled.div`
  margin-top: 8px;
  padding: 1px;
  width: 700px;
  background-color: black;
  margin-left: auto;
  margin-right: auto;
`;

const TextName = styled.div`
  width: auto;
  font-size: 30px;
  font-weight: 700;
  color: darkred;
  text-align: left;
  text-transform: uppercase;
`;

const Text1 = styled.div`
  width: auto;
  font-size: 22px;
  font-weight: 700;
  color: darkblue;
  text-align: center;
  text-transform: uppercase;
`;

const Text4 = styled.div`
  width: auto;
  font-size: 20px;
  font-weight: 700;
  color: darkred;
  text-align: center;
  text-transform: uppercase;
`;

const Text2 = styled.div`
  width: auto;
  font-size: 16px;
  font-weight: 700;
  color: darkgreen;
  text-align: center;
`;
const Text3 = styled.div`
  width: auto;
  font-size: 12px;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-bottom: 8px;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;


export default UserItem
