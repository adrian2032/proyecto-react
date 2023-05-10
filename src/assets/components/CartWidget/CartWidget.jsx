import React, { useState } from 'react';
import MyNavBar from '../NavBar/Navbar';
import ViewCount from '../ViewCount/ViewCount';


const CartWidget = () => {
  const [cartCount, setCartCount] = useState();

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <div className="cart-widget">
        <div>
            <MyNavBar>
            </MyNavBar>
            <div>
                <ViewCount></ViewCount>
                <img src='.\src\resources\icons8-agregar-a-carrito-de-compras-32.png'></img>
              
            </div>
            
            
        <span className="cart-count">{cartCount}</span>
        </div>
    </div>
  );
};

export default CartWidget;