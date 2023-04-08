import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  
  const {dispatch , state} = useContext(ContextGlobal)
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/home" className="nav-link"> Home </Link>
          </li>
          <li>
          <Link to="/favs" className="nav-link"> Faqs </Link>
          </li>
          <li>
          <Link to="/contacto" className="nav-link"> Contacto </Link>
          </li>
          
        </ul>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={()=> dispatch({ type: 'add_favs'})}>Change theme </button>
    </nav>
  )
}

export default Navbar