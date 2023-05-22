import React from "react";
import devices from "../../../data/courses";
import Item from "../item/Item";

function ItemListContainer(){
    return (
    <div> 
        ItemListContainer
        {
        devices.map((itemInArray) => (
            <Item key={itemInArray.title} {...itemInArray} />
        ))
        }
    </div>);
}
/* HOC*/
function withSearch( OrigComponent){
    function WrappedComponent(){
        return (
            <>
            <input placeholder="buscar productos ..."></input>
            <OrigComponent/>
            </>
    )    
    } 
}
return WrappedComponent

export default withSearch(ItemListContainer);