import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [respuesta, setRespuesta]= useState(false)

const onChangeName = (e)=>{
  setName(e.target.value)
}

const onChangeEmail = (e) =>{
  setEmail(e.target.value)
}




//Aqui deberan implementar el form completo con sus validaciones



const validarName =  (name) => {
  if (name.length > 5) {
    return true;
  } else {
    
    return false;
  }
}

const validarEmail =  (email) => {

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  

    return regexEmail.test(email)
  }




const onSubmitForm =  (e) => {
  e.preventDefault();

  
if(validarName(name) && validarEmail(email)){
setRespuesta(true);
return;

}
else{
  setRespuesta(false)

}
  
}

  return (
    <div>
      

      
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder='Ingrese su nombre' onChange={onChangeName} value={name} name="name"/> 
        <br />
        <input placeholder='Ingrese su email' onChange={onChangeEmail} value={email} name="email"/>
        <br />
      <button type='submit'>Enviar</button>
      </form> 
<br />
      {respuesta ? <div class="ok">Gracias {name}, te contactaremos cuando antes vía mail” </div> : <div class="bad"> Por favor verifique su información nuevamente</div> }
      
      
    </div>
  );
};

export default Form;
