import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import Ourworks from './Ourworks'
import Companies from './Companies'
import Testimonial from './Testimonial'
import { useState } from 'react';
import Footer from './Footer'
import bg from './assets/bgImage2.png'
import Home from './Home';
import Contact from './Contact';
import {Toaster} from 'react-hot-toast'


export default function App() {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem("darkMode"))||false);
    
    localStorage.setItem("darkMode", dark);
  return (

<div className={dark ? "dark overflow-hidden" : "overflow-hidden"} >
<Toaster/>
    <Navbar dark={dark} setDark={setDark} />
        <Home dark={dark} />
       <div
  className={dark ? "bg-black" : "bg-cover bg-center"}
  style={!dark ? { backgroundImage: `url(${bg})` } : undefined}
>
  <Companies />
  <Services />
</div>
<Ourworks dark={dark}/>
<Testimonial dark={dark}/>
<Contact dark={dark}/>
<Footer dark={dark}/>
    </div>
  )
}
