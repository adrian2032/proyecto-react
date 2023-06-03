import { useEffect, useState} from "react";
import devices from "../../../data/courses";
import ItemList from "./itemList";
import { useParams } from "react-router";



function getData(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(devices)}, 1000);
    });
}



function ItemListContainer({}){
    let[products, setProducts] =  useState([])
    const {categoryid} = useParams()
    console.log("-->",categoryid)

    useEffect(() => {
        getData().then((respuesta) =>{
            if(categoryid){
                const filterProducts = respuesta.filter((item) => item.category === categoryid);
                setProducts(filterProducts)
            }else{
                setProducts(respuesta);
            }
        })
    }, [categoryid]);

    return <ItemList products={(products)}></ItemList>    
}

export default ItemListContainer

