import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Companies from './Companies'
import { useState } from 'react';
import bg from './assets/bgImage2.png'
import Home from './Home';

export default function App() {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkMode"))||false);
    
    localStorage.setItem("darkMode", dark);
  return (
     <div className={dark ? "dark" : ""}>
    <Navbar dark={dark} setDark={setDark} />
        <Home dark={dark} />
       <div
  className={dark ? "bg-black" : "bg-cover bg-center"}
  style={!dark ? { backgroundImage: `url(${bg})` } : undefined}
>
  <Companies />
  <Services />
</div>
    </div>
  )
}
