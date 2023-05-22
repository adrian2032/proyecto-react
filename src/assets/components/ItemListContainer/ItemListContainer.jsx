import { useEffect, useState} from "react";
import devices from "../../../data/courses";
import ItemList from "../item/itemList";


function getData(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(devices)}, 2000);
    });
}

function ItemListContainer(){
    let[products, setProducts] =  useState([])

    useEffect(() => {
        getData().then((respuesta) =>{
            setProducts(respuesta);
        })
    }, []);

    return <ItemList products={products}></ItemList>    
}
export default ItemListContainer

