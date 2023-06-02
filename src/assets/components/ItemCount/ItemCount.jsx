import Flex from "../Flex/Flex";
import { useState } from "react";


function ItemCount(){
    const [ count, setCount] = useState(1);

    function handleAdd(){
        setCount(count + 1);
    }
    function handleExtract(){
        if (count > 1) setCount(count - 1);
    }


    return <div className="count-container">
        <div className="count-btns">
            <Flex>
                <button onClick={handleExtract}> - </button>
                <p> {count} </p>
                <button onClick={handleAdd}> + </button>
            </Flex>
        </div>
        <button> Agregar a mi carrito</button>
    </div>
}
export default ItemCount