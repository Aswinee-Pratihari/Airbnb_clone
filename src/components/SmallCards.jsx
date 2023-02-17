import React from 'react'

const SmallCards = ({item}) => {
    const {img,location,distance}=item;
  return (
    <div className='flex space-x-4 items-center shadow-md rounded-lg cursor-pointer hover:scale-105 hover:bg-gray-200 duration-200 ease-out'>

    <div className=' relative h-16 w-16'>
      <img src={img} alt="" className='object-fill rounded-lg'/>
    </div>


    <div>
    <h2 className='font-semibold'>{location}</h2>
    <span className='text-sm font-sans text-gray-400'>{distance}</span>
    </div>
    </div>
  )
}

export default SmallCards
