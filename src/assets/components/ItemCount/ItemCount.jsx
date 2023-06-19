import MyButton from "../Button/Button";
import Flex from "../Flex/Flex";
import { useState } from "react";
import "./ItemCount.css"


function ItemCount(props){
    const [ count, setCount] = useState(0);

    function handleAdd(){
        if( count < props.stock) setCount(count + 1);
    }
    function handleExtract(){
        if (count > 1) setCount(count - 1);
    }


    return (
    <div className="itemcount_container">
        <small> Agregar la cantidad deseada al carrito</small>
        <div className="itemcount_control">
            <Flex>
                <MyButton className="btn btn-danger" onClick={handleExtract}> - </MyButton>
                <span className="itemcount_count">{count}</span>
                <MyButton className="btn btn-success" onClick={handleAdd}> + </MyButton>
            </Flex>
        </div>
        <div className="itemcount_btns">
            <MyButton
            onClick={() => {props.onAddToCart(count)}}
            >
            Agregar a mi carrito
            </MyButton>
        </div>
    </div>)
    }
export default ItemCount