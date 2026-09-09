import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import Home from './Home';

export default function App() {
    const [dark, setDark] = useState(false);

  return (
    <>
    <Navbar dark={dark} setDark={setDark} />
        <Home dark={dark} />
       
    </>
  )
}
