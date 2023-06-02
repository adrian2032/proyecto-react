import { useEffect, useState } from "react";
import devices from "../../../data/courses"
import { useParams } from "react-router";

import ItemCount from "../ItemCount/ItemCount";

function getItemData(id){
    return new Promise((resolve) =>{
        setTimeout(() => {
            const requestedItem = devices.find ((item) => item.id === Number(id))
            resolve(requestedItem)
        }, 2000);
    });
};


function ItemDetailContainer(){
    //estado
    const [product, setProducts] = useState({})
    const id = useParams().id;

    //efecto 
    useEffect(() => {
            getItemData(id).then((respuesta) => {
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