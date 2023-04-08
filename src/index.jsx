import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import { ContextProvider } from './Components/utils/global.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
<ContextProvider>
    

      <Routes>
         <Route path='/' element={<App/>}>

        <Route path='/home' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        </Route>

      </Routes>

      </ContextProvider>
</BrowserRouter>


  </React.StrictMode>
);


