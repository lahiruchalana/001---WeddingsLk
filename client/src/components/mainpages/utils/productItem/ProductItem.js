import React, {useEffect} from 'react'
import styled from 'styled-components';
import BtnRender from './BtnRender'
import Aos from "aos";
import 'aos/dist/aos.css';

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    useEffect(() =>{
        Aos.init({ duration: 2500 });
    },[])

    return (
        <ProductCard data-aos="fade-left">
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img data-aos="fade-left" src={product.images.url} alt="" />

            <div className="product_box">
                <h2 data-aos="fade-left" title={product.title}>{product.title}</h2>
                <span>Rs {product.price} - Rs {product.max_price}</span>
                <p>{product.description}</p>
                <h5>No: {product.contact_number_1} / {product.contact_number_2}</h5>
                <h5>Address: {product.address_line_1},{product.address_line_2}</h5>
                <h5>Other Services: {product.other_services}</h5>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
        </ProductCard>
    )
}

const ProductCard = styled.div`

`;

export default ProductItem
