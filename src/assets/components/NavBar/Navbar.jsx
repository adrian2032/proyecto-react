import { Link } from "react-router-dom"
import "./navbar.css"
import { cartContext } from "../../context/cartContext"
import { useContext } from "react"



export default function MyNavBar () {
    return(
        
        <nav >
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>Nuestros Productos</Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Computer"}>Pc de Escritorio y Notebook</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/"}>SmartPhones</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Tablet"}>Tablets </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/category/Otros"}>Audio y otros </Link>
                </li>
                <CartWidget></CartWidget>
            </ul>
        </nav>
    )
}
function CartWidget(){
    const {countItems} = useContext(cartContext)
    return(
        <div>
            <span> {countItems()} </span>
        </div>
        );
}    


