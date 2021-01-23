import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
    { key: 1, value: "Parfums et eau de toilette " },
    { key: 2, value: "Produit d’hygiène " },
    { key: 3, value: "Produits cosmétiques " },
    { key: 4, value: "Maquillage" },
   
]

function uploadProduct (props) {

    const [ProductIDValue, setProductIDValue] = useState(0)
    const [NameValue, setNameValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [QuantityValue, setQuantityValue] = useState(0)
    const [BrandValue, setBrandValue] = useState("")
    const [ModelValue, setModelValue] = useState("")




    const onProductIDChange = (event) => {
        setProductIDValue(event.currentTarget.value)
    }

    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const onQuantityChange = (event) => {
        setQuantityValue(event.currentTarget.value)
    }

    const onBrandChange = (event) => {
        setBrandValue(event.currentTarget.value)
    }
    const onModelChange = (event) => {
        setModelValue(event.currentTarget.value)
    }
    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();

    if (!ProductIDValue || !NameValue || !QuantityValue ||
        !PriceValue || !BrandValue || !ModelValue || !CategoryValue) {
        return alert('fill all the fields first!')
    }

    const variables = {
        
        ProductId: ProductIdValue,
        Name: NameValue,
        price: PriceValue,
        Quantity: QuantityValue,
        Brand: BrandValue,
        Model: ModelValue,    
        Category:CategoryValue,  
    }
  
        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <Form onSubmit={onSubmit} > 
                <br />
                <br />
                <label>ProductID</label>
                <TextArea
                    onChange={onProductIDChange}
                    value={ProductIDValue}
                    type="number"
                />
                <br />
                <br />
                <label>Name</label>
                <TextArea
                    onChange={onNameChange}
                    value={NameValue}
                />
                 <br />
                <br />
                <label>Price</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <br />
                <br />
                <label>Quantity</label>
                <Input
                    onChange={onQuantityChange}
                    value={QuantityValue}
                />
                <br />
                <br />
                <label>Brand</label>
                <TextArea
                    onChange={onQuantityChange}
                    value={QuantityValue}
                />
                <br />
                <br />
                <label>Model</label>
                <Input
                    onChange={onModelChange}
                    value={ModelValue}
                    
                />
                <br /><br />
                <select onChange={onCategorySelectChange} value={CategoryValue}>
                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
                    }

export default uploadProduct

