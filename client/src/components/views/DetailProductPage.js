import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function DetailProductPage(props) {
    const ProductId = props.match.params.productId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${ProductId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])
    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.Name}</h1>
                {Product.Quantity}
            </div>
  
        </div>
    )
}

export default DetailProductPage