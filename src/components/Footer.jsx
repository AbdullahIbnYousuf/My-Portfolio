import React from 'react'

const Footer = () => {
  return (
    <div className='py-8 bg-dark-300'>
      <div className='container mx-auto text-center'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()} Created by Abdullah Ibn Yousuf. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
