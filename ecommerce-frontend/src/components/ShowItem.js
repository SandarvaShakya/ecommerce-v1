import Button from "./Button"
import productService from '../services/products'

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ShowItem = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    //fetch all data from server
    useEffect(() => {
        productService
          .getAll()
          .then(initialProduct => {
            setData(initialProduct)
          })
    }, [])

      const handleDelete = (id) => {
        const item = data.find(item => item.id === id)
        const confirm = window.confirm(`Confirm delete ${item.title}??`);
        if(id && confirm){
            productService
            .remove(id)
            .then(() => {
                setError("Product Successfully Deleted.");
                setTimeout(() => {
                    setError(null);
                }, 5000)
                setData(data.filter(item => item.id !== id))
            })
          }
      }
  
    return (
    <div className="container add-item-container">
        {error ? <p className="error">{error}</p> : ''}
        <h2>All Products</h2>
        <Link to="/supplier/add-item" className="link">
            Add Products
        </Link>
        <div className="all-product">
            {data.map(item => {
                return (
                    <div className="all-product--card" key={item.id}>
                    <div className="product-img">
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="product--content">
                        <div className="product--main">
                            <h3>{item.title}</h3>
                            <h3>Rs. {item.price}</h3>
                        </div>
                        <div className="product--description">
                            {item.description}
                        </div>
                        <p className="stock">Stock: {item.stock}</p>
                        <p className="vendor">Vendor: {item.vendor}</p>
                        <h4 className="category--title">Categories</h4>
                        <ul className="product--categories">
                            {item.categories.map((category, index) => {
                                return (
                                    <li key={index}>{category}</li>
                                )
                            })}
                        </ul>
                        <div className="buttons">
                            <Link to={`/supplier/update-product/${item.id}`} className="link">
                                Update
                            </Link>
                            <Button text="Delete" className="red-btn" onClick={() => handleDelete(item.id)}/>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShowItem