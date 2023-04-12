import Image from 'next/image';
//import bigPicture from 'bigPicture.png'
import React from 'react';

const Navbar = () => {
  return (
    <div id='about' className=" grid grid-rows-2 lg:grid-cols-2  m-10 relative bg-indigo-50 pb-8">
        
        <div className='hidden lg:block col-span-1 row-span-2 -mx-10'>
            <Image
            src='/aboutImage.png'
            alt='/'
            className='w-full h-full top-0'
            layout='responsive'
            width={300} 
            height={300}
          />
        </div>

        <div className=' col-span-1 row-span-2 lg:px-24 md:py-8 grid  place-items-center' >
          <div>


            <h1 className='text-4xl font-black py-8'>A few words<br/> about our <br/><span className='text-blue-600'>Printing House</span></h1>
            <p className=' font-medium text-gray-600 mb-4'>Eagle Signs and Advertising <br/> undertakes all related <br/> assignments. We guarantee <br/> competitive rates along with <br/> excellent & quality products</p>
            <div className='py-4'>
              <button className='py-2.5 w-full px-4 bg-blue-500 font-bold text-white' >Learn more About us</button>
            </div>
            </div>
        </div>
    
    </div>
    
  );
};

export default Navbar;
