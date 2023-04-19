const Card = ({ cardData }) => {
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
        <div className="card--cart" title="Add to cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      
    </div>
  )
}

export default Card