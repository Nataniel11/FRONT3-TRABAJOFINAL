import { createContext, useEffect, useState , useReducer } from "react";

export const initialState = {theme: "", favsDentista: []}

export const ContextGlobal = createContext();

  


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  const getFavsFromStorage = ()=>{
    const localData= localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  }
  
  
  const saveFavsFromStorage = (favs) => {
   localStorage.setItem("favs" , JSON.stringify(favs));
  
  }
  
  const reducer = (state , action) => {
    switch (action.type){
      
      case "add_favs":{
  
      const existentes = state.favsDentista.find((dentista) => dentista.id === action.dentista.id);

      if (existentes) {
        return state;
      }

      
      const newFavsDentista = [...state.favsDentista, action.dentista];
      saveFavsFromStorage(newFavsDentista)
      return { ...state, favsDentista: newFavsDentista };
    }


    case 'cargar_favs': {
      return { ...state, favsDentista: getFavsFromStorage() };
    }
    
    
    default:
      return state;
    }
      
  }


const [state, dispatch] = useReducer(reducer, initialState);




const[dentistas , setDentistas]= useState([]);

const getDentistas = async () => {
try{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setDentistas(data))
  }
  catch(error){
    console.error(error)
  }
}
useEffect(()=>{
  getDentistas();
  dispatch({type: "cargar_favs" })
},[]);

 

  return (

    <ContextGlobal.Provider value={{dentistas , state , dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};  




export default ContextProvider;