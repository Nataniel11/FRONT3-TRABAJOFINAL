import React from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const {dentistas} = useContext(ContextGlobal);


  
  return (
    <main className="" >
      <h1>Home</h1>


      <div className='card-grid'>
{ dentistas.length && dentistas.map((dentista) => (
<Card key={dentista.id} name={dentista.name}  username={dentista.username} id={dentista.id} ></Card>

)) }
        
      </div>
    </main>
  )
}

export default Home