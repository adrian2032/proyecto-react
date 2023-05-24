import { useEffect, useState } from "react";
import devices from "../../../data/courses"

function getItemData(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(devices[0])
        }, 2000);
    });
};


function ItemDetailContainer(){
    //estado
    const [product, setProducts] = useState({})

    //efecto 
    useEffect(() => {
            getItemData().then((respuesta) => {
                setProducts(respuesta)
            });
        },[])

    //UI
    return(
        <div>
            ItemDetailContainer
            <h1>Titulo: {product.title}</h1>
            <img src={product.img}></img>
            <h4> price: $ {product.price}</h4>
        </div>
    )
}

export default ItemDetailContainer