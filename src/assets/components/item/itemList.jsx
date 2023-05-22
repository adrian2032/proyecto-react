import React from "react";
import Item from "./Item";


function ItemList({products}){ 
    return(
     <div>
            <h1>catalogo</h1>
            {products.map((itemInArray)=>(
                <Item key={itemInArray.id} {...itemInArray}></Item>
            ))}
    </div>
)};

export default ItemList