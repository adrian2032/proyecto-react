import { useEffect, useState} from "react";

import devices from "../../../data/courses";
import ItemList from "../item/itemList";


function getData(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(devices)}, 2000);
    });
}

/* HOC */
function withSearch(OrigComponent){
    function WrappedComponent(){
        const [searchword, setsearchword] = useState("")

    function handleChange(evt){
        const valor = evt.target.value;
        setsearchword(valor)
    }
    
    function filterList(products){
        if (searchword === "") {
            return products
        }else{
            return products.filter((item) => item.title === searchword)    
        }
    }    
        return(
        <>
        <input onChange={handleChange} placeholder="buscar productos ..."></input>
        <OrigComponent filterList={filterList} ></OrigComponent>
        </>
    )}

    return WrappedComponent
}

function ItemListContainerSearch({filterList}){
    let[products, setProducts] =  useState([])

    useEffect(() => {
        getData().then((respuesta) =>{
            setProducts(respuesta);
        })
    }, []);

    return <ItemList products={filterList(products)}></ItemList>    
}

const WrappedItemListContainerSearch = withSearch(ItemListContainerSearch)

export default WrappedItemListContainerSearch

