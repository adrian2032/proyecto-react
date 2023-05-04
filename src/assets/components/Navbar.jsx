function MyNavbar (props){
    const styleNav ={
            backgroundColor: props.color,
        }
    return(
    <nav backgroundColor={styleNav}>
        <ul className="nav-menu">
            <li className="nav-item">
                <a className="nav-link" href="#">Nuestros Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Quienes somos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto y Sucursales</a>
            </li>

            <div>0</div>
        </ul>
    </nav>)
}

export default MyNavbar;