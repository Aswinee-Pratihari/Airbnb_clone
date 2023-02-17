import React from 'react'

const LargeCard = ({img,heading,para}) => {
  return (


    <section className='relative py-16'>
        <div className='relative  min-w-[300px]'>
            <img src={img} alt="" className='object-cover rounded-2xl h-72 w-full' />
        </div>
        <div className='absolute  top-32 sm:top-10 md:top-32 text-white py-4 px-6'>
<h3 className=' sm:text-2xl md:mb-5 md:text-4xl font-semibold mb-0'>{heading}</h3>
<p className='text-2xl'> {para}</p>
<button className='bg-black py-3 px-6 rounded-lg mt-5 hover:scale-110 duration-200 ease-out'>Get Started</button>
        </div>
    </section>
  
  )
}

export default LargeCard
