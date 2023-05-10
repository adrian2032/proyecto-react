import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import MyButton from "./assets/components/Button";
import MyNavBar from "./assets/components/NavBar/Navbar";


function handleClick(){
  alert("dirigiendo a sitio web")

}

function App() {

  const userName = "cecilia";
  const [count, setCount] = useState(0)


  return (
    <>

      <div>
        <div>
          <MyNavBar></MyNavBar>
  
        
        </div>
      </div>
        <div>
            <MyButton color="red" label="Computadoras" onclick={handleClick} > Computadoras </MyButton>
            <MyButton color="yellow" label="Notebooks"  onclick={handleClick} > Notebooks </MyButton>
            <MyButton color="green" label="Componentes"  onclick={handleClick} > Componentes de PC </MyButton>
            <MyButton color="red" label="otros"  onclick={handleClick} > Otros Productos </MyButton>
            


          </div>


    
       {
  }
    </>
  )}
export default App
