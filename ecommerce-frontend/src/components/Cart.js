import { Link } from "react-router-dom"

import NavBar from "./NavBar"

const Cart = ({cartItem, setCartItem, cartNumber, setCartNumber}) => {
    //removes item form cart    
    const remove = (id) => {
        const tempCart = cartItem.filter(item => item.id !== id)
        setCartItem(tempCart)
        setCartNumber(cartNumber - 1)
    }

  return (
    <div>
        <NavBar cartNumber={cartNumber}/>
        <div className="container">
            <p className="total">
                Total : Rs. {cartItem.reduce((accumulator, item) => accumulator + item.price, 0)}
            </p>
            <div className="cart-cards">
                {cartItem.map(item => {
                    return (
                        <div className="cart-card" key={item.id}>
                            <div className="cart-card--img">
                                <img src={item.imgUrl} alt="pictureasd" />
                            </div>
                            <div className="cart-card--content">
                                <h3 className="cart-card--title">{item.title}</h3>
                                <p className="cart-card--price">Rs. {item.price}</p>
                                <p className="description">{item.description}</p>
                                <div className="cart-card--btn" onClick={() => remove(item.id)}>Remove</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link to="/" className="link link--db">
                Checkout
            </Link>
            <Link to="/" className="link">
                Return Home
            </Link>
        </div>
    </div>
  )
}

export default Cart