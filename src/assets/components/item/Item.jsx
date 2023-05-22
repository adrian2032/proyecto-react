import "./Item.css"
import MyButton from "../Button.jsx"
import ItemCount from "../ItemCount/ItemCount";
//import "./item.css"

function CardDescription(props){
    return(
        <div className="item-card_detail">
            <h3> ${props.price}
            </h3>
            <small>{props.category}</small>
            <MyButton label="ver mas"></MyButton>
        </div>
    )
}

function Item({title, img, price, category, color}){
    return (
        <div className="item-card">
            <div className="item-card_header">
                <h2 className="title">{title}</h2>
            </div>
            <div className="item-card_img">
                <img src={img} alt="imagen" width={"100%"} ></img>
            </div>
            <CardDescription price={price} category={category}/>
            <ItemCount></ItemCount>
            <MyButton color={color}> Ver detalle</MyButton>
        </div>
    )
}

export default Item;