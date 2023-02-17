import React from 'react'
import banner from '../assets/banner.jfif'
const Banner = () => {
  return (
    <div className="relative h-[300px] max-sm:h-[400px]  xl:h-[600px] 2xl:h-[700px]  ">
    {/* <Image src='/banner.jfif'
    fill
    className="object-cover"
    /> */}
    <img src={banner} alt="" className=' object-cover w-full h-[300px] max-sm:h-[400px]  xl:h-[600px] 2xl:h-[700px]'/>
    <div className=" bg-gradient-to-tr from-gray-600 to-transparent absolute w-full top-0 h-full"> </div>
    <div className="absolute top-1/2 w-full text-center">
      <p className="text-lg font-medium">Not Sure Where to go? </p>
      <button className="bg-gray-200 py-2 px-10 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-105 duration-150">Fix it</button>
    </div>
  </div>
  )
}

export default Banner
