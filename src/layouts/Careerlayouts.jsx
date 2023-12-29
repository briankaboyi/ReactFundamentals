import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Careerlayouts() {
  return (
    <div className='career-layouts'>
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, doloremque!</p>
      <Outlet/>
    </div>
  )
}
