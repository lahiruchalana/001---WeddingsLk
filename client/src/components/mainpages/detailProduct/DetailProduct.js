import React, {useContext, useState, useEffect} from 'react'
import styled from "styled-components";
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const addConfirmedVendors = state.userAPI.addConfirmedVendors
    const addWishToBuy = state.userAPI.addWishToBuy
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
            <div className="detail">
                <div className="box-detail">
                    <div >
                        <img src={detailProduct.images.url} alt="" />
                        <Line4></Line4>
                        <Text3>{detailProduct.content_5}</Text3>
                    </div>
                </div>        
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        <h6>#id: {detailProduct.product_id}</h6>
                    </div>
                    <LineLite1></LineLite1>
                    <h4>Rs {detailProduct.price} - {detailProduct.max_price}</h4>
                    <LineLite1></LineLite1>
                    <h4>{detailProduct.address_line_1}</h4>
                    <LineLite1></LineLite1>
                    <Text5>{detailProduct.description}</Text5>
                    <Line3></Line3>
                    <Text6>{detailProduct.content}</Text6>
                    <Text1>{detailProduct.content_2}</Text1>
                    <LineLite1></LineLite1>
                    <div className="row">
                    <Text2>{detailProduct.content_3}</Text2>
                    <Text2>{detailProduct.content_4}</Text2>
                    </div>
                    <Line3></Line3>
                    <h4>Total Buyers: {detailProduct.sold}</h4>
                    <Line2></Line2>
                    <h4>Contact: {detailProduct.contact_number_2} / {detailProduct.contact_number_1}</h4>
                    <Line1></Line1>
                    <Text4>{detailProduct.address_line_1}</Text4>
                    <Text4>{detailProduct.address_line_2}</Text4>
                    <Text4>{detailProduct.address_line_3}</Text4>
                    <LineLite1></LineLite1>
                    <Link to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        Add to Cart Now
                    </Link>
                    <Link to="/confirmed_vendors" className="cart"
                    onClick={() => addConfirmedVendors(detailProduct)}>
                        Confirm Vendor
                    </Link>
                    <Link to="/wish_to_buy" className="cart"
                    onClick={() => addWishToBuy(detailProduct)}>
                        Wish To Buy
                    </Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    <LineLite1></LineLite1>
                    <Text1>Other Services: {detailProduct.other_services}</Text1>
                    <LineLite1></LineLite1>
                </div>
            </div>

            <div>
                <h1>Related Vendors</h1>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
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
export default DetailProduct
