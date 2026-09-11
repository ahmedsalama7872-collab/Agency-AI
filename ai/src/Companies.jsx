import React from 'react'
import sec2Bg from './assets/bgImage2.png'
import firstC from './assets/coinbase_logo.png'
import secondC from './assets/google_logo.svg'
import thirdC from './assets/rakuten_logo.png'
import forthC from './assets/microsoft_logo.png'
import fifthC from './assets/airbnb_logo.svg'
import sixthC from './assets/zoom_logo.png'

export default function Companies({dark}) {
  return (

      <section
        id="companies"
        className="md:pt-[200px] pt-[50px] text-center dark:bg-black "
       
      >  
      <p className='main-text font-semibold text-[20px]'>Trusted by Leading Companies</p>
      <div className='lg:gap-14 gap-10  items-center mx-auto inline-flex py-14 flex-wrap justify-center max-w-[90%]'>
        <img src={firstC} className='lg:w-[150px] md:w-[100px] w-[100px]' alt="" />
        <img src={secondC} alt="" className='lg:w-[120px] md:w-[80px]' />
        <img src={thirdC} alt="" className='lg:w-[120px] md:w-[80px] w-[100px]' />
        <img src={forthC} alt="" className='lg:w-[150px] md:w-[100px] w-[100px]' />
        <img src={fifthC} alt="" className='lg:w-[120px] md:w-[80px] w-[100px]' />
        <img src={sixthC} alt="" className='lg:w-[120px] md:w-[80px] w-[100px]' />
      </div>
      </section>
)
}
