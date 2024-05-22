import React from 'react'
import { Outlet } from 'react-router-dom'
import { imageUrl } from '../../constants/apiConstant'

const HomeOffline = () => {
  return (
    <>
      <div className='w-screen bg-white'>
        <img
          src={'https://upload.wikimedia.org/wikipedia/commons/5/55/GEN_id_color_rgb.png'}
          alt='http://wsar1077:8080/pulse/plugins/pulse/#/'
          className='w-full h-36 object-contain pt-2'
        />
      </div>
      <Outlet />
    </>
  )
}

export default HomeOffline