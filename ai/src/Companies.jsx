import React from 'react'
import sec2Bg from './assets/bgImage2.png'
import firstC from './assets/coinbase_logo.png'
import secondC from './assets/google_logo.svg'
import thirdC from './assets/rakuten_logo.png'
import forthC from './assets/microsoft_logo.png'
import fifthC from './assets/airbnb_logo.svg'
import sixthC from './assets/zoom_logo.png'
import { motion } from 'motion/react'

export default function Companies({dark}) {
  return (

      <section
        id="companies"
        className="md:pt-[200px] pt-[50px] text-center dark:bg-black "
       
      >  
      <motion.p 
      initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}}
            viewport={{ once: true }}

        className='main-text font-semibold text-[20px]'>Trusted by Leading Companies</motion.p>
      <div className='lg:gap-14 gap-10  items-center mx-auto inline-flex py-14 flex-wrap justify-center max-w-[90%]'>
        <motion.img 
        initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.5,
    }}
    viewport={{ once: true }} src={firstC} className='lg:w-[150px] md:w-[100px] w-[100px]' alt="" />
        <motion.img 
         initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.7,
      delay: 0.7,
    }}
    viewport={{ once: true }}
        src={secondC} alt="" className='lg:w-[120px] md:w-[80px]' />
        <motion.img
         initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      delay: 0.9,
    }}
    viewport={{ once: true }}
        src={thirdC} alt="" className='lg:w-[120px] md:w-[80px] w-[100px]' />
        <motion.img
         initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.1,
      delay: 1.1,
    }}
    viewport={{ once: true }}
        src={forthC} alt="" className='lg:w-[150px] md:w-[100px] w-[100px]' />
        <motion.img
         initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.3,
      delay: 1.3,
    }}
    viewport={{ once: true }}
        src={fifthC} alt="" className='lg:w-[120px] md:w-[80px] w-[100px]' />
        <motion.img
         initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.5,
      delay: 1.5,
    }}
    viewport={{ once: true }} src={sixthC} alt="" className='lg:w-[120px] md:w-[80px] w-[100px]' />
      </div>
      </section>
)
}
