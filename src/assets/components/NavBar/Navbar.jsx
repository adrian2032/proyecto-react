import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import ViewCount from "../ViewCount/ViewCount"

import { Link } from "react-router-dom"

const MyNavBar = () => {
    return(
        
    <nav className="{styles.nav}">
        <ul className="nav-menu">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Nuestros Productos</Link> 
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/product"}>Pc de Escritorio y Notebook</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>SmartPhones</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Tablets </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>Audio y otros </Link>
            </li>
            <CartWidget></CartWidget>
            <ViewCount></ViewCount>
            

            
        </ul>
    </nav>

    )
}

export default MyNavBar;