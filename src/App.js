
import './App.css';
import React, { useState } from 'react';



function App(props) {

 const[description,setDescription]= useState(false)

  return (

       <div className="conteiner">
    <div className="head">{props.data.town}</div>

    <div className="mainBody">
        <div className="picture"> 
        <img src={props.data.image1} alt={props.data.id}/>
        <img src={props.data.image2} alt={props.data.id}/>
        <img src={props.data.image3} alt={props.data.id}/>
        </div>
        <div className="description">
            <p><span>Город :</span> {props.data.town}</p>
            <p><span>Страна:</span> {props.data.country}</p>
            <p><span>Год основания:</span> {props.data.yearOfBorn}</p>
            <p className="lsDesc">{props.data.description}</p>
           
        </div>
    </div>
    <div className="footer">
        <button 
            onClick={()=>setDescription(prev =>!prev)}
            >{description? 'Cкрыть':'Подробнее..'}</button>
            {description && <p>{props.data.allDescription}</p>}
    </div>
    
 </div>
   
  );
}

export default App;
