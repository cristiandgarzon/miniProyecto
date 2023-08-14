import { useEffect, useState } from "react";
import "./Cards.css"
import Nav from "../nav/Nav";

function Cards() {

 // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
 const [data, setData] = useState([]);

 // Función para traer los datos de "stays.json".
 const getData = async () => {
   // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
   try {
     const res = await fetch("stays.json");
     const resJson = await res.json();
     // Aquí guardamos los datos de "stays.json" en la variable data.
     setData(resJson);
   } catch (error) {
     console.log(error);
   }
 };
 
 //esta funcion setea el valor de value 
 const[value, setValue]=useState("Helsinki")


 const handlevalueFiltro = (newValue)=>{
    setValue(newValue);
 }

 
//fin funcion  

 useEffect(() => { getData(); }, []);

 console.log(data);
 return (

    
   <section className="hero">
    <header>
    
      <Nav 
      data={data}

      //aca esta el prop
      valueFiltro={handlevalueFiltro}
      >
      

      </Nav>
      
    </header>

    
    

  <h1 className="tituloP">Stays in Finland</h1>
  
  <section className="cardContainer">
  
      {data.map((el, i) => {

        if(el.city==value){
          return (

          
            <section className="card">
              
    
             <div className="photo">
             
             <img  className="foto" key={[i]} src={el.photo} height={300} width={0} alt="foto"/>
             </div>
             
             
          
            <div>
             <div>
              <div className="description">
              <p className={`SuperHost ${el.superHost?"": "Ocultar"}`}>SUPER HOST</p>
              <p key={[i]}>{el.type}.  {el.beds !== null ? el.beds + " beds": null }</p>
    
              <small key={[i]}><span class="material-symbols-outlined">
              star</span>{el.rating}</small>
              </div>
             </div>
    
              <h6 key={[i]}>{el.title}</h6>
    
             </div> 
              
             
    
    
             </section>
              
             
           )
        }
        
       
       })} 

    </section>
   </section>

 );

 
}

export default Cards