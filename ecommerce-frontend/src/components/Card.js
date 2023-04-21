const Card = ({ cardData, cartNumber, setCartNumber, cartItem, setCartItem }) => {
  const addToCart = () => {
    setCartNumber(cartNumber + 1);
    setCartItem(cartItem.concat(cardData))
  }
  
  return (
    <div className="card">
      <div className="card--image">
        <img src={cardData.imgUrl} alt={cardData.title} />
      </div>
      <div className="card--content">
        <div className="card--text">
          <h3 className="card--title">
            {cardData.title}
          </h3>
          <p className="card--price">Rs. {cardData.price}</p>
        </div>
        <div className="card--cart" title="Add to cart" onClick={addToCart}>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  )
}

export default Card