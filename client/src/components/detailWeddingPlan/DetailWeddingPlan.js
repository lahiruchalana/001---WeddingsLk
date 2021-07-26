import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import WeddingPlanItem from '../utils/weddingPlanItem/WeddingPlanItem'
import Header from '../header/Header'
import Footer from '../footer/Footer'

import Aos from "aos";
import 'aos/dist/aos.css';


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [weddingPlans] = state.weddingPlansAPI.weddingPlans
    // const addCart = state.userAPI.addCart
    // const addConfirmedVendors = state.userAPI.addConfirmedVendors
    // const addWishToBuy = state.userAPI.addWishToBuy
    const [detailWeddingPlan, setDetailWeddingPlan] = useState([])
    const addWishToBuyWeddingPlans = state.userAPI.addWishToBuyWeddingPlans
    const addConfirmedWeddingPlans = state.userAPI.addConfirmedWeddingPlans


    useEffect(() =>{
        if(params.id){

            weddingPlans.forEach(weddingPlan => {
                if(weddingPlan._id === params.id) setDetailWeddingPlan(weddingPlan)
            })
        }

        
        Aos.init({ duration: 2500 });
        
        
    },[params.id, weddingPlans])

    if(detailWeddingPlan.length === 0) return null;

    return (
        <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
            {/* <div className="detail"> */}
                <Product_card data-aos="fade-left">
                
                <img data-aos="fade-left" src={detailWeddingPlan.images_1.url} alt="" />

                <h2 title={detailWeddingPlan.title}>{detailWeddingPlan.title}</h2>

                <Box>
                    <Product_box>
                        <h2 title={detailWeddingPlan.vendor_1}>{detailWeddingPlan.vendor_1}</h2>
                        <h5>Service: {detailWeddingPlan.category_1}</h5>
                        <span>Rs {detailWeddingPlan.price_1} - Rs {detailWeddingPlan.max_price_1}</span>
                        <p>{detailWeddingPlan.description_1}</p>
                        {/* <h5>No: {weddingPlan.contact_number_1}</h5> */}
                        <h5>Address: {detailWeddingPlan.address_1}</h5>
                    </Product_box>
                    <Product_box>
                        <h2 title={detailWeddingPlan.vendor_2}>{detailWeddingPlan.vendor_2}</h2>
                        <h5>Service: {detailWeddingPlan.category_2}</h5>
                        <span>Rs {detailWeddingPlan.price_2} - Rs {detailWeddingPlan.max_price_2}</span>
                        <p>{detailWeddingPlan.description_2}</p>
                        {/* <h5>No: {weddingPlan.contact_number_1}</h5> */}
                        <h5>Address: {detailWeddingPlan.address_2}</h5>
                    </Product_box>
                    { detailWeddingPlan.vendor_3.title == null ? '' : 
                        <Product_box>
                            <h2 title={detailWeddingPlan.vendor_3}>{detailWeddingPlan.vendor_3}</h2>
                            <h5>Service: {detailWeddingPlan.category_3}</h5>
                            <span>Rs {detailWeddingPlan.price_3} - Rs {detailWeddingPlan.max_price_3}</span>
                            <p>{detailWeddingPlan.description_3}</p>
                            {/* <h5>No: {weddingPlan.contact_number_1}</h5> */}
                            <h5>Address: {detailWeddingPlan.address_3}</h5>
                        </Product_box>
                    }
                </Box>

                <br/>

                <div className="row_btn">

                    <Link id="btn_buy" to="/wish_to_buy_wedding_plans" onClick={() => addWishToBuyWeddingPlans(detailWeddingPlan)}>
                                Add to Wish List
                    </Link>
                    <Link id="btn_view" to="/confirmed_wedding_plans" onClick={() => addConfirmedWeddingPlans(detailWeddingPlan)}>
                                Confirm Wedding Plan
                    </Link>

                </div>

            </Product_card>
     
                {/* <div className="box-detail">
                    <div className="row">
                        <h2>{detailWeddingPlan.title}</h2>
                        <h6>#id: {detailWeddingPlan.weddingPlan_id}</h6>
                    </div>
                    <LineLite1></LineLite1>
                    <h4>Rs {detailWeddingPlan.price_1} - {detailWeddingPlan.max_price_1}</h4>
                    <LineLite1></LineLite1>
                    <h4>{detailWeddingPlan.address_1}</h4>
                    <LineLite1></LineLite1>
                    <Text5>{detailWeddingPlan.description_1}</Text5>
                    <Line3></Line3> */}
                    {/* <Text6>{detailProduct.content}</Text6>
                    <Text1>{detailProduct.content_2}</Text1>
                    <LineLite1></LineLite1>
                    <div className="row">
                    <Text2>{detailProduct.content_3}</Text2>
                    <Text2>{detailProduct.content_4}</Text2>
                    </div> */}
                    {/* <Line3></Line3>
                    <h4>Total Buyers: {detailWeddingPlan.sold}</h4>
                    <Line2></Line2> */}
                    {/* <h4>Contact: {detailProduct.contact_number_2} / {detailProduct.contact_number_1}</h4>
                    <Line1></Line1> */}
                    {/* <Text4>{detailWeddingPlan.address_1}</Text4> */}
                    {/* <Text4>{detailProduct.address_line_2}</Text4>
                    <Text4>{detailProduct.address_line_3}</Text4>
                    <LineLite1></LineLite1> */}
                    {/* <Link to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>
                    <Link to="/confirmed_vendors" className="cart"
                    onClick={() => addConfirmedVendors(detailProduct)}>
                        Confirmed Vendor
                    </Link>
                    <Link to="/wish_to_buy" className="cart"
                    onClick={() => addWishToBuy(detailProduct)}>
                        Wish To Buy
                    </Link> */}
                   {/* <br></br>
                   <br></br>
                   <br></br> */}
                    {/* <LineLite1></LineLite1>
                    <Text1>Other Services: {detailProduct.other_services}</Text1>
                    <LineLite1></LineLite1> */}
                   

                {/* </div>
            </div> */}

            

            {/* <div>
                <h1>Related Wedding Plans</h1>
                <div className="products">
                    {
                        weddingPlans.map(weddingPlan => {
                            return weddingPlan.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div> */}
            <Footer/>
        </>
    )
};

const Text1 = styled.div`
    margin: 5px;
    font-size: 22px;
    font-weight: 700;
    color: darkblue;
`;
const Text2 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkgreen;
`;
const Text3 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkred;
`;
const Text4 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkviolet;
`;
const Text5 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkcyan;
    text-align: center;
`;
const Text6 = styled.div`
    margin: 5px;
    font-size: 20px;
    color: darkslategray;
    text-align: center;
`;
const Line1 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
    background-color: black;
`;
const Line2 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: black;
`;
const Line3 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    background-color: black;
`;
const Line4 = styled.div`
    padding: 2px;
    margin: 5px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    background-color: black;
`;
const LineLite1 = styled.div`
    padding: 2px;
    margin: 10px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    background-color: darkgrey;
`;

const Product_card = styled.div`

  width: 1200px;
  overflow: hidden;
  height: 590px;
  padding: 15px;
  box-shadow: 0 0 15px #03045e;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  position: relative;


  img {
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
  }

  h2 {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-transform: capitalize;
  cursor: pointer;
  color: #323232;
  }
  
  span {
  color: crimson;
  }
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
`;
 
const Product_box = styled.div`
    margin: 5px 5px;
`;
export default DetailProduct
