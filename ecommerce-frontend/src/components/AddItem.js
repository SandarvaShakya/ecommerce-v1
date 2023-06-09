import { Link } from "react-router-dom"
import { useState } from "react";

import productService from '../services/products'
import Button from './Button'

const categories = ['Clothing', 'Electronics', 'Shoes']

const AddItem = () => {
    //title of product
    const [title, setTitle] = useState('');
    //price of product
    const [price, setPrice] = useState(0);
    //vendor of product
    const [vendor, setVendor] = useState('');
    //categories of product
    const [checkedCategories, setCheckedCategories] = useState([])
    //image of product
    const [imgUrl, setImgUrl] = useState('')
    //stock of product
    const [stock, setStock] = useState(0)
    //description of product
    const [description, setDescription] = useState('')
    //for preview shown or not shown
    const [previewView, setPreviewView] = useState(true);

    //product add nessage
    const [message, setMessage] = useState('')

    // adds new product
    // post request to api in backend
    const addItem = (event) => {
        event.preventDefault()
        const productObject = {
            title: title,
            price: price,
            vendor: vendor,
            categories: checkedCategories,
            imgUrl: imgUrl,
            stock: stock,
            date: new Date(),
            description: description
        }

        productService
        .create(productObject)
        .then(returnedProduct => {
            setTitle('')
            setPrice(0)
            setVendor('')
            setCheckedCategories([])
            setImgUrl('')
            setStock(0)
            setDescription('')
            setMessage('Product Successfully Added.')
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        })
    }

    //records every key press in title input field
    const titleChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value)
    }

    //records every key press in price input field
    const priceChange = (event) => {
        console.log(event.target.value);
        setPrice(event.target.value)
    }

    //records every key press in vendor input field
    const vendorChange = (event) => {
        console.log(event.target.value);
        setVendor(event.target.value)
    }

    //records every key press in url input field
    const urlChange = (event) => {
        console.log(event.target.value);
        setImgUrl(event.target.value)
    }

    //records every key press in stock input field
    const stockChange = (event) => {
        console.log(event.target.value);
        setStock(event.target.value)
    }

    //records every key press in stock input field
    const descriptionChange = (event) => {
        console.log(event.target.value);
        setDescription(event.target.value)
    }

    //add the checked category to array
    const checkChange = (event) => {
        if(event.target.checked){
            setCheckedCategories([...checkedCategories, event.target.value.toLowerCase()])
        } else{
            const tempCheck = checkedCategories.filter(category => event.target.value !== category ? category : '')
            setCheckedCategories(tempCheck)
        }
    }

    //to show or disable preview
    const handlePreview = () => {
        setPreviewView(!previewView)
    }

    return (
        <div className="container add-item-container">
            <h1>Add Product</h1>
            <Link to="/supplier/all-products" className="link">
                See All Products
            </Link>
            <br />
            <br />
            <Button text={previewView ? 'Hide Preview' : 'Show Preview'} onClick={handlePreview}/>
            {message && <p className="message">{message}</p>}
            <div className={previewView ? "preview" : "preview disable-preview"}>
                <div className="preview-img">
                    <img src={imgUrl ? imgUrl : '/images/square.png'} alt={title} />
                </div>
                <div className="preview-content">
                    <div className="preview--text">
                        <h3 className="preview--title">{title ? title : 'Product Name'}</h3>
                        <p className="preview--price">Rs. {price ? price : 'Product Price'}</p>
                    </div>
                    <div className="card--cart" title="Add to cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <form className="form" onSubmit={addItem}>
                <div className="form--element">
                    <label htmlFor="title">Product Title</label>
                    <input 
                        type="text" 
                        placeholder="Eg: Nike Shoes" 
                        required autoComplete="off" 
                        onChange={titleChange}
                        value={title}
                    />
                </div>
                <div className="form--element">
                    <label htmlFor="price">Product Price</label>
                    <input 
                        type="text" 
                        placeholder="Eg: 2000" 
                        required autoComplete="off"
                        onChange={priceChange}
                        value={price}
                    />
                </div>
                <div className="form--element">
                    <label htmlFor="vendor">Vendor</label>
                    <input 
                        type="text" 
                        placeholder="Eg: Nike" 
                        autoComplete="off"
                        onChange={vendorChange}
                        value={vendor}
                    />
                </div>
                <div className="form--element">
                    <label htmlFor="categoreis">Categories</label>
                    <br/>

                    {categories.map((category, index) => {
                        return (
                            <div className="checkbox-item" key={index}>
                                <input
                                    type="checkbox"
                                    name={category}
                                    className="checkbox"
                                    onChange={checkChange}
                                    value={category}
                                />
                                <label htmlFor="category">{category}</label>
                            </div>
                        )
                    })}
                </div>
                <div className="form--element">
                    <label htmlFor="imgUrl">Product Image URL</label>
                    <input 
                        type="url" 
                        placeholder="Eg: https://i.imgur.com/FPDfr1e.png" 
                        required autoComplete="off"
                        onChange={urlChange}
                        value={imgUrl}
                    />
                </div>
                <div className="form--element">
                    <label htmlFor="stock">Stock </label>
                    <input 
                        type="number" 
                        placeholder="Eg: 500" 
                        required autoComplete="off"
                        onChange={stockChange}
                        value={stock}
                    />
                </div>
                <div className="form--element">
                    <label htmlFor="description">Product Description</label>
                    <textarea 
                        name="description" 
                        cols="30" 
                        rows="10" 
                        required
                        onChange={descriptionChange}
                        value={description}
                    ></textarea>
                </div>
                <div className="form--element">
                    <input type="submit" value="Add Product"/>
                </div>
            </form>
        </div>
    )
}

export default AddItem