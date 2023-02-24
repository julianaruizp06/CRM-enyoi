import React from "react";
import { useNavigate } from "react-router-dom"
import Grafica from "./Grafica";
import Header from "./Header";
import {AiOutlineUser} from "react-icons/ai";



const Dashboard = (props) => { 
console.log("🚀 ~ file: Dashboard.jsx:5 ~ Dashboard ~ props", props)
const navigate=useNavigate();

    function cerrarSesion() {
      navigate("/")  
   
    }

    function vistaUsuarios() {
      navigate("/usuarios")  
   
    }


    function vistaClientes() {
      navigate("/clientes")  
   
    }

    function vistaArticulos() {
      navigate("/articulos")  
   
    }
    function vistaCotizacion() {
      navigate("/cotizaciones")  
   
    }
  
    return (
      
      <div>
        <div >
          <Header/>
        </div>
    

      <div className="dash">

        <div className="barralateral">


       

<div className="header">  

            <div className="icono">
           <div className="iconos">
          <AiOutlineUser/> 
          </div>
          <div className="iconos">
         Administrador: {props.user.name}<br/>   
          </div>
         

          </div> 
              
                 
      </div>


<div className="nav">


<nav className="nav">
      
           <a     
             href=" "
             onClick={vistaUsuarios}
           >      
              Usuarios
           </a>
           <a
            
             href=" "
             onClick={vistaClientes}
           >
             Clientes
           </a>
           <a
         
             href=" "
             onClick={vistaArticulos}
           >
             Articulos
           </a>
           <a
             
             href=" "
             onClick={vistaCotizacion}
           >
            
             Cotizaciones
           </a>
           <a
          
             href=" "
             onClick={cerrarSesion}
           >
           
            Cerrar sesion
           </a>             
   
   </nav>
   </div>
 


   </div>
        
         
      
      
     <div className="grafica">
      <Grafica></Grafica>
     </div>
   
  
     </div>
    
      
      </div>
  
      
    );
}
export default Dashboard;