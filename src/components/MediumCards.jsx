import React from 'react'

const MediumCards = ({item}) => {
    const {img,title}=item;
  return (
    <div className='cursor-pointer hover:scale-105 duration-200 ease-out py-4'>

    <div className='relative h-80 w-80 '>
      <img src={img} alt="" className='object-fill rounded-lg'/>
    </div>
    <div>
        <h2 className='text-base font-normal mt-4 '>{title}</h2>
    </div>
    </div>
  )
}

export default MediumCards
