import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>Rs {product.price} - Rs {product.max_price}</span>
                <p>{product.description}</p>
                <h5>No: {product.contact_number_1} / {product.contact_number_2}</h5>
                <h5>Address: {product.address_line_1},{product.address_line_2}</h5>
                <h5>Other Services: {product.other_services}</h5>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
