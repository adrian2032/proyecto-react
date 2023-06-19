import "./Item.css"
import MyButton from "../Button/Button.jsx"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

//import "./item.css"

function CardDescription(props){
    return(
        <div className="item-card_detail">
            <h3> US${props.price}</h3>
            <h7></h7>
            <p>{props.category}</p>
       
        </div>
    )
}

function Item({title, img, price, category, color, id}){

    return (
        <>
        
            <div className="item-card">
                <Link to={`/product/${id}`}>
                    <div className="item-card_header">
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="item-card_img">
                        <img src={img} alt="imagen" width={"100%"} ></img>
                    </div>
                    <CardDescription price={price} category={category}/>    
              
                    <MyButton color={color}> Ver detalle</MyButton>
                </Link>
                <ItemCount stock={3}></ItemCount>
            </div>
         
        </>
        
    )
}

export default Item;