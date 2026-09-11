import React from 'react'
import facebook from './assets/facebook_icon.svg'
import twitter from './assets/twitter_icon.svg'
import insta from './assets/instagram_icon.svg'
import linked from './assets/linkedin_icon.svg'
import { faC } from '@fortawesome/free-solid-svg-icons'


export default function Copyright() {
  return (
<div className='flex justify-between w-10/12 mx-auto py-8'>
<p className='text-[#7A7A7ACC] md:text-[18px] text-[12px] main-text'>Copyright 2025 © agency.ai  -  All Right Reserved.</p>
<div className='flex items-center md:gap-6 gap-2'>
    <a href="https:www.facebook.com" target='_blank'>

    <img src={facebook} className='md:w-8' alt="" />
    </a>
    <a href="https:www.x.com" target='_blank'>

    <img src={twitter} className='md:w-8' alt="" />
    </a>
    <a href="https:www.instagram.com" target='_blank'>

    <img src={insta} className='md:w-8' alt="" />
    </a>
    <a href="https:www.linkedin.com" target='_blank'>

    <img src={linked} className='md:w-8' alt="" />
    </a>
</div>
</div>
  )
}
