import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray-300 text-center p-6 mt-10'>
      <p>
        Copytight { year } Me
      </p>
    </footer>
  )
}

export default Footer;