import { useContext, useEffect, useState } from "react";
import devices from "../../../data/courses"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router";
import { cartContext } from "../../context/cartContext";
import Button from "../Button/Button";



function getItemData(id){
    return new Promise((resolve) =>{
        setTimeout(() => {
            const requestedItem = devices.find ((item) => item.id === Number(id))
            resolve(requestedItem)
        }, 1000);
    });
};


function ItemDetailContainer(){
    //estado
    const [product, setProducts] = useState({})
    const {cart, addItem, removeItem } = useContext(cartContext)

    
    console.log("context:", cart)
    
    function onAddToCart(count){
        addItem(product, count)
        alert(`agregaste ${count} - ${product.title} al carrito`);

    }
    const id = useParams().id;


    //efecto 
    useEffect(() => {
            getItemData(id).then((respuesta) => {
                setProducts(respuesta)
            });
        }, [id])

    //UI
    return(
        <div className="card-detail_main">
            <div className="card-detail_img">
                <img src={product.img} alt={product.title}></img>
            </div>
            <div className="card-deatil_detail">
                <h1>{product.title}</h1>
                <h2 className="priceTag"> US$ {product.price}</h2>
                <h7> precios a dolar oficial</h7>
                <small>{product.detail}</small>
                <ItemCount onAddToCart={onAddToCart} stock={5}></ItemCount>
                <Button onClick={ () => removeItem(product.id) }> Eliminar </Button>
            </div>

            
        </div>
    )
}

export default ItemDetailContainer