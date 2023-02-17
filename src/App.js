import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import { useEffect, useState } from 'react';
import { places,facilities } from './utils/data';
import SmallCards from './components/SmallCards';
import MediumCards from './components/MediumCards';
import LargeCard from './components/LargeCard';
import card from './assets/Largecard.webp'
import Footer from './components/Footer';
function App() {
//   const getdata=async()=>{
//     const data=await fetch('')
//     console.log(data.json())
//   }
  const [data,setdata]=useState([])
  const[facility,setfacility]=useState([])
  useEffect(()=>{
setdata(places)
setfacility(facilities)
  },[])
  return (
   <>
   <Header/>
   <Banner/>

   <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-3xl font-semibold pb-6 '>Explore Nearby</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 shadow-md gap-5 sm:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-6 '>
      {
          data.map((item)=>{
            return(
              <SmallCards key={item.id} item={item}/>
              )
            })
      }
            </div>
      </section>

      <section className='pt-6'>
        <h2 className='text-3xl font-semibold pb-6 '>Live Anywhere</h2>
        <div className='flex space-x-8 overflow-scroll scrollbar-hide '>
      {
          facility.map((item)=>{
            return(
              <MediumCards key={item.id} item={item}/>
              )
            })
      }
            </div>
      </section>

      <LargeCard img={card} heading={"Time for some fun"} para={"Get recommendation from airbnb"}/>
     </main>
<Footer/>

   </>
  );
}

export default App;
