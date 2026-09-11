import React from 'react'
import js, { teamData } from './assets/assets.js'
export default function Testimonial({dark}) {
  return (
 <div
      id="testimonial"
      className="relative flex flex-col items-center gap-3 px-4 pt-30 pb-30 z-0
 text-gray-700 dark: text-white dark:bg-black"
    >
      <h2 className="font-semibold md:text-[40px] text-[24px] mx-auto text-black dark:text-white">
        Meet the team
      </h2>
      <p className="main-text text-[20px] md:w-[600px] text-center">
        A passionate team of digital experts dedicated to your
brand’s success.
      </p>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mt-16 w-[90%] lg:w-[85%]'>
    {teamData.map((data,index)=>{
        return  <div key={index} className='flex gap-4 bg-white rounded-xl border border-gray-100 dark:border-gray-700 h-24 items-center px-6 dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5
hover:scale-103 transition-all duration-400'>
        <div className='min-w-[40px] max-w-[60px]  md:max-w-8 lg:min-w-12 lg:max-w-14'><img src={data.image} alt="" className='rounded-full'/></div>
        <div className='text-black dark:text-white flex flex-col gap-2'>
            <h5>{data.name}</h5>
            <p className='main-text text-[12px]'>{data.title}</p>
        </div>
    </div>
    })}
    </div>
   

      </div>  )
}
