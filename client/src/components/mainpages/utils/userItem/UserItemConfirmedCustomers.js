import styled from 'styled-components';
// import BtnRender from './BtnRender'
// import Button from '@material-ui/core/Button';
import React, {useState, useContext} from 'react'
import {GlobalState} from '../../../../GlobalState'
import axios from 'axios'
import { Button } from '@material-ui/core';


function UserItem({user, isAdmin, deleteProduct, handleCheck}) {

    const state = useContext(GlobalState)
    // const [categories] = state.categoriesAPI.categories
    // const [emp_name, setEmpName] = useState('')
    const [emp_name, setEmpName] = state.userInfoAPI.emp_name
    const [emp_contact, setEmpContact] = state.userInfoAPI.emp_contact
    const [progress, setProgress] = state.userInfoAPI.progress
    const [progress2, setProgress2] = state.userInfoAPI.progress2
    const [progress3, setProgress3] = state.userInfoAPI.progress3
    const [token] = state.token
    const [callback, setCallback] = state.userInfoAPI.callback
    // const [onEdit, setOnEdit] = useState(false)
    // const [id, setID] = useState('')
    // const [id] = useState('')

    const updateUsers = async e =>{
        e.preventDefault()
        try {
        
            const res = await axios.put(`/user/users/${user._id}`, {emp_name: emp_name, emp_contact: emp_contact}, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            
                
            // setOnEdit(false)
            setEmpName('')

            setEmpContact('')

            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const notAssigned = async id =>{
        try {
            const res = await axios.put(`/user/users/${user._id}/progress`, {progress: progress}, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setProgress('0')
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const completed = async id =>{
        try {
            const res = await axios.put(`/user/users/${user._id}/progress`, {progress: progress2}, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setProgress2('0')
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const progressIn = async id =>{
        try {
            const res = await axios.put(`/user/users/${user._id}/progress`, {progress: progress3}, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setProgress3('0')
            setCallback(!callback)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    // const updateProgress = async (_id, user.progress) =>{
            
    //         setEmpName(emp_name)
    //         setOnEdit(true)
    // }
   

    // const editUsers = async (id, emp_name) =>{
    //     setID(id)
    //     setEmpName(emp_name)
    //     setOnEdit(true)
    // }

    return (
        <div>
            { user.role == 1 || user.role == 2 ? '' : 
                user.confirmed_vendors.length && user.confirmed_wedding_plans.length === 0 ? null 
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

                    
                        <div>{user.confirmed_vendors.map(confirmed_vendors => {
                            return( 
                            <>
                                <div>
                                    <Text1>{confirmed_vendors.title}</Text1>
                                    <Text2>{confirmed_vendors.address_line_1}</Text2>
                                    <Text3>Rs: {confirmed_vendors.price} - {confirmed_vendors.max_price}</Text3>
                                    { user.progress == '0' ? 
                                            <ButtonBox>
                                                <Button style={{
                                                    // borderRadius: 35,
                                                    backgroundColor: "#bf0603"
                                                    // padding: "18px 36px",
                                                    // fontSize: "18px"
                                                    }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                            Not Assigned
                                                </Button>
                                            </ButtonBox> 
                                            :  user.progress == '1' ? 
                                                <ButtonBox>
                                                    <Button style={{
                                                        // borderRadius: 35,
                                                        backgroundColor: "#31e000"
                                                        // padding: "18px 36px",
                                                        // fontSize: "18px"
                                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                Completed
                                                    </Button>
                                                </ButtonBox>
                                                : 
                                                    <ButtonBox>
                                                        <Button style={{
                                                            // borderRadius: 35,
                                                            backgroundColor: "#ffee32"
                                                            // padding: "18px 36px",
                                                            // fontSize: "18px"
                                                            }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                    Work in Progress
                                                        </Button>
                                                    </ButtonBox>
                                        }
                                    <Line1></Line1>
                                    <br/>
                                </div>
                            </>
                        )})}</div>
                        <div>{user.confirmed_wedding_plans.map(wish_to_buy => {
                            return( 
                            <>
                                <Text1>{wish_to_buy.title}</Text1>
                                <div>
                                    <Text4>{wish_to_buy.vendor_1}</Text4>
                                    <Text3>Rs: {wish_to_buy.price_1} - {wish_to_buy.max_price_1}</Text3>
                                    <Text2>{wish_to_buy.address_1}</Text2>
                                    { user.progress == '0' ? 
                                            <ButtonBox>
                                                <Button style={{
                                                    // borderRadius: 35,
                                                    backgroundColor: "#bf0603"
                                                    // padding: "18px 36px",
                                                    // fontSize: "18px"
                                                    }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                            Not Assigned
                                                </Button>
                                            </ButtonBox> 
                                            :  user.progress == '1' ? 
                                                <ButtonBox>
                                                    <Button style={{
                                                        // borderRadius: 35,
                                                        backgroundColor: "#31e000"
                                                        // padding: "18px 36px",
                                                        // fontSize: "18px"
                                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                Completed
                                                    </Button>
                                                </ButtonBox>
                                                : 
                                                    <ButtonBox>
                                                        <Button style={{
                                                            // borderRadius: 35,
                                                            backgroundColor: "#ffee32"
                                                            // padding: "18px 36px",
                                                            // fontSize: "18px"
                                                            }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                    Work in Progress
                                                        </Button>
                                                    </ButtonBox>
                                        }
                                    <br></br>
                                </div>
                                
                                <div>
                                    <Text4>{wish_to_buy.vendor_2}</Text4>
                                    <Text3>Rs: {wish_to_buy.price_2} - {wish_to_buy.max_price_2}</Text3>
                                    <Text2>{wish_to_buy.address_2}</Text2>
                                    { user.progress == '0' ? 
                                            <ButtonBox>
                                                <Button style={{
                                                    // borderRadius: 35,
                                                    backgroundColor: "#bf0603"
                                                    // padding: "18px 36px",
                                                    // fontSize: "18px"
                                                    }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                            Not Assigned
                                                </Button>
                                            </ButtonBox> 
                                            :  user.progress == '1' ? 
                                                <ButtonBox>
                                                    <Button style={{
                                                        // borderRadius: 35,
                                                        backgroundColor: "#31e000"
                                                        // padding: "18px 36px",
                                                        // fontSize: "18px"
                                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                Completed
                                                    </Button>
                                                </ButtonBox>
                                                : 
                                                    <ButtonBox>
                                                        <Button style={{
                                                            // borderRadius: 35,
                                                            backgroundColor: "#ffee32"
                                                            // padding: "18px 36px",
                                                            // fontSize: "18px"
                                                            }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                    Work in Progress
                                                        </Button>
                                                    </ButtonBox>
                                        }
                                    <br></br>
                                </div>
                                
                                { wish_to_buy.vendor_3 == '' ? '' :
                                    <div>
                                        <Text4>{wish_to_buy.vendor_3}</Text4>
                                        <Text3>Rs: {wish_to_buy.price_3} - {wish_to_buy.max_price_3}</Text3>
                                        <Text2>{wish_to_buy.address_3}</Text2>
                                        { user.progress == '0' ? 
                                            <ButtonBox>
                                                <Button style={{
                                                    // borderRadius: 35,
                                                    backgroundColor: "#bf0603"
                                                    // padding: "18px 36px",
                                                    // fontSize: "18px"
                                                    }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                            Not Assigned
                                                </Button>
                                            </ButtonBox> 
                                            :  user.progress == '1' ? 
                                                <ButtonBox>
                                                    <Button style={{
                                                        // borderRadius: 35,
                                                        backgroundColor: "#31e000"
                                                        // padding: "18px 36px",
                                                        // fontSize: "18px"
                                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                Completed
                                                    </Button>
                                                </ButtonBox>
                                                : 
                                                    <ButtonBox>
                                                        <Button style={{
                                                            // borderRadius: 35,
                                                            backgroundColor: "#ffee32"
                                                            // padding: "18px 36px",
                                                            // fontSize: "18px"
                                                            }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                                    Work in Progress
                                                        </Button>
                                                    </ButtonBox>
                                        }
                                        <br></br>
                                        <Line1></Line1>
                                    </div>
                                }
                            </>
                        )})}</div>
                        <Line1></Line1>
                        <br></br>
                        <Text5>Current Employee - {user.emp_name}</Text5>
                        <br></br>
                        <Text5>Contact Number of Employee - 0{user.emp_contact}</Text5>
                        <br></br>
                        <Line1></Line1>
                        <br></br>
                        <Form>
                            <form onSubmit={updateUsers}>
                                <label htmlFor="category">Add Employee</label>
                                <div></div>
                                <input type="text" name="category" value={emp_name} required
                                onChange={e => setEmpName(e.target.value)} />

                                <br/>
                                

                                {/* <button type="submit">Assigne</button>
                            </form>
                            <form onSubmit={updateUsers}> */}
                                <label htmlFor="cate" >Employee Contact Number</label>
                                <div></div>
                                <input type="number" name="category" value={emp_contact} required
                                onChange={e => setEmpContact(e.target.value)} />
                                <div></div>
                                <br/>
                                
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#52b788"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }}
                                    data-aos="fade-left" size="large" variant="contained" color="gray"   type="submit">
                                        Assigne Employee
                                </Button>
                            </form>
                        </Form>
                        <br></br>
                        <Line1></Line1>
                        <br></br>
                        <Text6>Current States of the Wedding</Text6>
                        <br></br>
                        { user.progress == '0' ? 
                            <ButtonBox>
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#bf0603"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }}  data-aos="fade-left" variant="contained" color="secondary" color="white">
                                            Still Not Assigned a Employee
                                </Button>
                            </ButtonBox> 
                            :  user.progress == '1' ? 
                                <ButtonBox>
                                    <Button style={{
                                        // borderRadius: 35,
                                        backgroundColor: "#31e000"
                                        // padding: "18px 36px",
                                        // fontSize: "18px"
                                        }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                The wedding was successfully Completed
                                    </Button>
                                </ButtonBox>
                                : 
                                    <ButtonBox>
                                        <Button style={{
                                            // borderRadius: 35,
                                            backgroundColor: "#ffee32"
                                            // padding: "18px 36px",
                                            // fontSize: "18px"
                                            }} data-aos="fade-left" variant="contained" color="secondary" color="white">
                                                    Work in Progress. Employee is {user.emp_name}
                                        </Button>
                                    </ButtonBox>
                        }
                        <br></br>
                        <br></br>
                        <Line1></Line1>
                        <br></br>
                        <Text6>Update the States of the Wedding</Text6>
                        <br></br>
                        <Progress>
                            <div>
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#bf0603"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }}
                                    data-aos="fade-left" size="large" variant="contained" color="gray" 
                                    onClick={() => notAssigned(user._id)}>
                                        Not Assigned
                                </Button>
                            </div>
                            <div>
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#31e000"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }}
                                    data-aos="fade-left" size="large" variant="contained" color="gray" 
                                    onClick={() => completed(user._id)}>
                                        Wedding Completed
                                </Button>
                            </div>
                            <div>
                                <Button style={{
                                    // borderRadius: 35,
                                    backgroundColor: "#ffee32"
                                    // padding: "18px 36px",
                                    // fontSize: "18px"
                                    }}
                                    data-aos="fade-left" size="large" variant="contained" color="gray" 
                                    onClick={() => progressIn(user._id)}>
                                        Work in Progress
                                </Button>
                            </div>
                        </Progress>
                        
                        <br></br>

                        <Line1></Line1>
                        <br></br>
                        {/* <Text5>{user.progress}</Text5> */}


                        


                        {/* <div className="row" key={user._id}>
                            <div>
                                <button onClick={() => editUsers(user._id, user.emp_name)}>Edit</button>
                                <button onClick={() => deleteCategory(user._id)}>Delete</button>
                            </div>
                        </div> */}


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

const Text5 = styled.div`
  width: auto;
  font-size: 20px;
  font-weight: 700;
  color: darkred;
  text-align: center;
  text-transform: uppercase;
`;

const Text6 = styled.div`
  margin-top: 10px;
  width: auto;
  font-size: 20px;
  font-weight: 700;
  color: #5c374c;
  text-align: center;
  text-transform: uppercase;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const Progress = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  div {
    display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  }
`;

export default UserItem
