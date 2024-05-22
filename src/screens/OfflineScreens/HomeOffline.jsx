import React from 'react'
import { Outlet } from 'react-router-dom'
import { imageUrl } from '../../constants/apiConstant'

const HomeOffline = () => {
  return (
    <>
      <div className='w-screen bg-white'>
        <img
          src={'https://upload.wikimedia.org/wikipedia/commons/5/55/GEN_id_color_rgb.png'}
          alt=""
          className='w-full h-28 object-contain pt-4'
        />
      </div>
      <Outlet />
    </>
  )
}

export default HomeOffline