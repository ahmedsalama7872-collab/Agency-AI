import React from 'react'
import firstWork from'./assets/work_mobile_app.png'
import secWork from'./assets/work_dashboard_management.png'
import thirdWork from'./assets/work_fitness_app.png'



export default function Ourworks({dark}) {
  return (
      <div
      id="ourWorks"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 pb-30 z-0
 md:px-24 px-10 x1:px-40 text-gray-700 dark: text-white dark:bg-black"
    >
      <h2 className="font-semibold md:text-[40px] text-[30px] mx-auto text-black dark:text-white">
        Our latest work
      </h2>
      <p className="main-text text-[20px] md:w-[600px] text-center">
        Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.
      </p>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-16 w-[100%] lg:w-[85%] mx-auto'>

        <div className='hover:scale-103 transition-all duration-200'>
            <img src={firstWork} alt="" />
            <h4 className='text-black dark:text-white font-bold text-[20px] mt-4 cursor-pointer transition-all duration-300 hover:scale-102'>Mobile app marketing</h4>
            <p className='main-text text-[16px] mt-3 w-3/4'>We turn bold ideas into powerful digital solutions that connect...</p>
        </div>
        <div className='hover:scale-103 transition-all duration-200'>
            <img src={secWork} alt="" />
            <h4 className='text-black dark:text-white font-bold text-[20px] mt-4 cursor-pointer transition-all duration-300 hover:scale-102'>Dashboard management</h4>
            <p className='main-text text-[16px] mt-3 w-3/4'>We turn bold ideas into powerful digital solutions that connect...</p>
        </div>
        <div className='hover:scale-103 transition-all duration-200'>
            <img src={thirdWork} alt="" />
            <h4 className='text-black dark:text-white font-bold text-[20px] mt-4 cursor-pointer transition-all duration-300 hover:scale-102'>Fitness app promotion</h4>
            <p className='main-text text-[16px] mt-3 w-3/4'>We turn bold ideas into powerful digital solutions that connect...</p>
        </div>


        </div>

    </div>
  )
}
