import React from 'react'
import Link from 'next/link';
// import Menu from './Menu';

const Navbar = () => {
  return (
    <div className=" h-12 text-pink-900 flex items-center justify-between border-b-2 border-b-pink-900 uppercase">
      {/* Logo */}
      <div className='text-xl'>
        <Link href="/">Licias Gourmet Haven</Link>
      </div>
      {/* menu */}
      <div>
        {/* <Menu/> */}
      </div>
    </div>
  );
}

export default Navbar
