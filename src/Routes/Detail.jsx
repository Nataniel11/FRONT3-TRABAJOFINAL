import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const[dentista , setDentista]= useState([]);
const params = useParams();


const getDentista = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await res.json();
  setDentista(data)
    
  
}
useEffect(()=>{
  getDentista();
});



  return (
    <>
      <h1>Detail Dentist id {dentista.name} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div class="detail">

        <table>
          <tr>
        <td>Nombre</td>
        <td>Email</td>
        <td>Telefono</td>
        <td>Sitio web</td>
        </tr>
        <tr>

    <td><h4>{dentista.name}</h4></td>  
    <td><h4> {dentista.email}</h4></td>
    <td><h4>{dentista.phone} </h4></td>
    <td><h4>{dentista.website}</h4></td>
    
        </tr>
        </table>
    

    </div>
    </>
  )
}

export default Detail