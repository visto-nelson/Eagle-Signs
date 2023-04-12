import React from 'react';

const Hero = ({}) => {
  return (
    <div className='pl-2  h-screen'>
    <div className='flex grid lg:grid-cols-2 items-center justify-center h-full  bg-fixed bg-center bg-cover custom-img'>
      
      {/* Overlay */}
      <div className='absolute lg:col-span-1 top-0 left-0 right-0 bottom-0 bg-white/10 z-[2]' />
      <div className='lg:px-16 pt-48 ml-16 text-white z-[2] mt-[-10rem]'>
        <h2 className=' text-2xl md:text-4xl font-extrabold'>we transform <br/> splendid thoughts into<br/> splendid marks </h2>
        <p className='py-5 text-sm font-light'>you’re in the coolest <span className=' font-semibold'>printing</span> and <span className=' font-semibold'>branding</span> house right now.</p>
        
      </div>
      <div className='lg:col-span-1'></div>
    </div>
    </div>
  );
};

export default Hero;
