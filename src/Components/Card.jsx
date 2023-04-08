import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({id, name , username }) => {

  const {state , dispatch} = useContext(ContextGlobal);      
  const addFav = (dentista)=>{


    dispatch({type:"add_favs" , dentista})
    alert(`Se añadio a ${name} a tus favoritos`)
  
    

    // Aqui iria la logica para agregar la Card en el localStorage
  }

  


  return (


    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

      <Link to={`/detail/${id}`}>
        <div>
<h1>{id} - {name}</h1>
<img src='../images/doctor.jpg' alt='' width="100px" height="100px" ></img>
<h2>{username}</h2>

</div>
</Link>


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav({id: id, name: name, username: username})} className="favButton">Add favs</button>
    </div>
  );
};

export default Card;
