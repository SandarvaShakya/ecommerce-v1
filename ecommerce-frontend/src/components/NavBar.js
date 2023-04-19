const NavBar = () => {
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
                <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                <p className="item-number">0</p>
            </div>
        </div>
    </nav>
  )
}

export default NavBar