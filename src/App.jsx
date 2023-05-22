import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import MyButton from "./assets/components/Button";
import MyNavBar from "./assets/components/NavBar/Navbar";
import Item from './assets/components/item/Item';
import Flex from './assets/components/Flex/Flex';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';


function handleClick(){
  alert("dirigiendo a sitio web")

}

function App() {

  const userName = "cecilia";
  const [count, setCount] = useState(0)


  return (
    <>
      <div className="header">
          <MyNavBar></MyNavBar>
          <input></input>
          <Flex><ItemListContainer></ItemListContainer></Flex>
          
    

      <h2>Ofertas del día</h2>
      <Flex>
          <Item title={"Notebook Lenovo V14 G2 14"} price={"US$536"} img={"/src/assets/notebook1.jpg"}></Item>
          <Item title={"Mini Pc Bangho Cubic A80"} price={"US$340"} img={"/src/assets/pcEscritorio.jpg"}></Item>
          <Item title={"Monitor 24 FHD Acer "} price={"US$120"} img={"/src/assets/monitor-acer.gif"}></Item>
      </Flex>

    
      </div>
   
    {/*        <MyButton color="red" label="Computadoras" onclick={handleClick} > Computadoras </MyButton>
            <MyButton color="yellow" label="Notebooks"  onclick={handleClick} > Notebooks </MyButton>
            <MyButton color="green" label="Componentes"  onclick={handleClick} > Componentes de PC </MyButton>
            <MyButton color="red" label="otros"  onclick={handleClick} > Otros Productos </MyButton>
  */}
    </>
  )}
export default App
