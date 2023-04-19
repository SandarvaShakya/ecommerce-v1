import { Link } from 'react-router-dom'

const NavBar = ({ cartNumber, setCartNumber }) => {
  return (
    <nav className="nav">
        <div className="container nav-flex">
            <h1 className="logo">
                ECOMMERCE
            </h1>
            <ul className="nav-list">
                <li className="nav-item">HOME</li>
            </ul>
            <div className="cart">
                <Link to="/cart">
                    {/* Cart */}
                    <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                </Link>
                <p className="item-number">{cartNumber}</p>
            </div>
        </div>
    </nav>
  )
}

export default NavBar