import React, { useEffect, useState } from 'react'
import productService from '../services/products';

import Card from './Card';
import NavBar from './NavBar';
import Button from './Button';

const heroImages = [
    {
      id: 0,
      imgUrl: "./images/accessories.jpg"
    },
    {
      id: 1,
      imgUrl: "./images/clothing.jpg"
    },
    {
      id: 2,
      imgUrl: "./images/electronics.jpg"
    },
  ]

const Home = ({cartItem, setCartItem, cartNumber, setCartNumber}) => {
  const [currentImg, setCurrentImg] = useState(0)
  const [cardData, setCardData] = useState([]);
  const [tempData, setTempData] = useState([]);

  /***
   * changes hero image every 5 second
   */
  useEffect(() => {
    const timer = setTimeout(()=>{
      if(currentImg === 2){
        setCurrentImg(0)
      }else{
        setCurrentImg(currentImg+1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentImg])

  //fetch all data from server
  useEffect(() => {
    productService
      .getAll()
      .then(initialProduct => {
        setCardData(initialProduct)
        setTempData(initialProduct)
      })
  }, [])

  /***
   * function to shift the hero image to right
   */
  const goRight = () => {
    if(currentImg === 2){
      setCurrentImg(0)
    }else{
      setCurrentImg(currentImg + 1)
    }
  }

  /***
   * function to shift the hero image to left
   */
  const goLeft = () => {
    if(currentImg === 0){
      setCurrentImg(2)
    }else{
      setCurrentImg(currentImg - 1)
    }
  }

  /***
   * function to filter popular items
   */
  const showPopular = () => {
    const popular = cardData.filter(data => data.categories.includes("popular") && data);
    setTempData(popular)
    console.log("Popular items: ", popular);
  }

  /***
   * function to show all items
   */
  const showAll = () => {
    setTempData(cardData);
    console.log("All items: ", cardData);
  }

  /***
   * function to filter electronic items
   */
  const showElectronics = () => {
    const electronics = cardData.filter(data => data.categories.includes("electronics") && data);
    setTempData(electronics)
    console.log("Electronics items: ", electronics);
  }

  /***
   * function to filter clothing items
   */
  const showClothing = () => {
    const clothing = cardData.filter(data => data.categories.includes("clothing") && data);
    setTempData(clothing)
    console.log("Clothing items: ", clothing);
  }
  
  return (
    <div className='wrapper'>
        <NavBar 
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
        />
        <div className="hero-section">
            <div className="hero-content">
                <i className="fa-solid fa-arrow-left" onClick={goLeft}></i>
                <p className='hero-logo'>ECOMMERCE</p>
                <p className='hero-slogan'>The best online shop in town</p>
                <i className="fa-solid fa-arrow-right" onClick={goRight}></i>
            </div>
            <div className="overlay"></div>
            <div className="hero-image">
                <img src={heroImages[currentImg].imgUrl} alt="item" />
            </div>
        </div>
        <div className="container">
            <div className="categories--section">
                <h2>Categories</h2>
                <div className="buttons">
                    <Button text="All" onClick={showAll}/>
                    <Button text="Popular" onClick={showPopular}/>
                    <Button text="Electronics" onClick={showElectronics}/>
                    <Button text="Clothing" onClick={showClothing}/>
                </div>
                <div className="cards">
                    {tempData.map(data => {
                    return <Card
                      key = {data.id}
                      cardData = {data}
                      cartNumber={cartNumber}
                      setCartNumber={setCartNumber}
                      cartItem={cartItem}
                      setCartItem={setCartItem}
                    />
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home