import './App.css'
import MyNavBar from "./assets/components/NavBar/Navbar";
import Flex from './assets/components/Flex/Flex';
import ItemListContainer from './assets/components/ItemListContainer/ItemListContainer';
import ItemListContainer_Search from './assets/components/ItemListContainer/ItemListContainer_Search';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './assets/components/ItemDetailContainer.jsx/ItemDetailContainer';

function handleClick(){
  alert("dirigiendo a sitio web")

}

function App() {
  return (
    <>
    <div className="header">
      <MyNavBar></MyNavBar>
      {/*<ItemDetailContainer></ItemDetailContainer>
      <ItemListContainer></ItemListContainer>*/}
      <ItemListContainer></ItemListContainer>
    </div>
  {/*<BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
    </Routes>
  </BrowserRouter>  
  */}
          
            
 
  

    {/*        <MyButton color="red" label="Computadoras" onclick={handleClick} > Computadoras </MyButton>
            <MyButton color="yellow" label="Notebooks"  onclick={handleClick} > Notebooks </MyButton>
            <MyButton color="green" label="Componentes"  onclick={handleClick} > Componentes de PC </MyButton>
            <MyButton color="red" label="otros"  onclick={handleClick} > Otros Productos </MyButton>
       <h2>Ofertas del día</h2>
      <Flex>
          <Item title={"Notebook Lenovo V14 G2 14"} price={"US$536"} img={"/src/assets/notebook1.jpg"}></Item>
          <Item title={"Mini Pc Bangho Cubic A80"} price={"US$340"} img={"/src/assets/pcEscritorio.jpg"}></Item>
          <Item title={"Monitor 24 FHD Acer "} price={"US$120"} img={"/src/assets/monitor-acer.gif"}></Item>
      </Flex>*/
      }
      
    </>
  )}

export default App
