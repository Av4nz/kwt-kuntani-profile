import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white'>
      <ul className='flex space-x-6'>
        <li>
            <a href="/" className='hover:underline'>Beranda</a>
        </li>
        <li>
            <a href="/" className='hover:underline'>Tentang</a>
        </li>
        <li>
            <a href="/" className='hover:underline'>Produk</a>
        </li>
        <li>
            <a href="/" className='hover:underline'>Kegiatan</a>
        </li>
        <li>
            <a href="/" className='hover:underline'>Kontak</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
