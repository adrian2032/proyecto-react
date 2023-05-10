import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget.jsx"
import ViewCount from "../ViewCount/ViewCount"

const MyNavBar = () => {
    return(
    <nav className="{styles.nav}">
        <ul className="nav-menu">
            <li className="nav-item">
                <a className="nav-link" href="#">Sonic Computacion</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nuestros Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Quienes somos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto y Sucursales</a>
            </li>
            <ViewCount></ViewCount> 
            <CartWidget></CartWidget>
            

            
            
        </ul>
    </nav>)
}

export default MyNavBar;