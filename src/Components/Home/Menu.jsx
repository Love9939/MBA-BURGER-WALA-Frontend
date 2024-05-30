import React from 'react'
import MenuCard from './MenuCard';
import burger1 from "../../assets/burger1.png"
import burger2 from "../../assets/burger2.png"
import burger3 from "../../assets/burger3.png"
import burger4 from "../../assets/burger4.png"

const Menu = () => {
  const addToCartHandler = (itemNum) => {

  }
  return (
    <section id='menu'>
      <h1>MENU</h1>
      <div>
        <MenuCard 
        itemNum={1} 
        burgerSrc={burger1} 
        price={89} 
        title="Veg Burger"
        delay={0.2} 
        handler={addToCartHandler}
        />

        <MenuCard 
        itemNum={2} 
        burgerSrc={burger4} 
        price={159} 
        title="Cheese Burger"
        delay={0.5} 
        handler={addToCartHandler}
        />

        <MenuCard 
        itemNum={3} 
        burgerSrc={burger2} 
        price={189} 
        title="Chicken Burger"
        delay={0.8} 
        handler={addToCartHandler}
        />
      </div>
      <br />
      <br />
      <div>
        <MenuCard 
        itemNum={4} 
        burgerSrc={burger1} 
        price={100} 
        title="Burger-4" 
        delay={1.1}
        handler={addToCartHandler}
        />

        <MenuCard 
        itemNum={5} 
        burgerSrc={burger4} 
        price={200} 
        title="Burger-5" 
        delay={1.4}
        handler={addToCartHandler}
        />

        <MenuCard 
        itemNum={6} 
        burgerSrc={burger4} 
        price={300} 
        title="Burger-6" 
        delay={1.7}
        handler={addToCartHandler}
        />
      </div>
    </section>
  )
}

export default Menu ;