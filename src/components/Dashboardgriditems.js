import React, { useEffect, useState } from 'react'
import { BiStation } from 'react-icons/bi'
import { BsBusFront } from 'react-icons/bs'
import { GiPathDistance } from 'react-icons/gi'

function Dashboardgriditems() {








    const [totalBusData, setTotalBusData] = useState(0);
    const [totalRouteData, setTotalRouteData] = useState(0);
    const [totalStationData, setTotalStationData] = useState(0);

    useEffect(() => {
      fetchBusDataCount();
    }, []);
    useEffect(() => {
        fetchRouteDataCount();
      }, []);
      useEffect(() => {
        fetchStationDataCount();
      }, []);
  
    const fetchBusDataCount = async () => {
      try {
        const response = await fetch('https://addisbuss.onrender.com/api/admin/buses');
        const data = await response.json();
        const totalCount = data.length; // Assuming the API response is an array of bus data objects
  
        setTotalBusData(totalCount);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    const fetchRouteDataCount = async () => {
        try {
          const response = await fetch('https://addisbuss.onrender.com/api/admin/routes');
          const data = await response.json();
          const totalCount = data.length; // Assuming the API response is an array of bus data objects
    
          setTotalRouteData(totalCount);
        } catch (error) {
          console.error('Error fetching bus data:', error);
        }
      };




      const fetchStationDataCount = async () => {
        try {
          const response = await fetch('https://addisbuss.onrender.com/api/admin/stations');
          const data = await response.json();
          const totalCount = data.length; // Assuming the API response is an array of bus data objects
    
          setTotalStationData(totalCount);
        } catch (error) {
          console.error('Error fetching bus data:', error);
        }
      };





  return (
    <div className='flex gap-4 p-7 w-full'>
    <Wrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-800'>
            <BsBusFront className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Buses</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>{totalBusData}</strong>
            </div>
        </div>
    </Wrapper>
    <Wrapper>
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-700'>
            <GiPathDistance className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Routes</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>{totalRouteData}</strong>
            </div>
        </div>
    </Wrapper>
    <Wrapper>
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-700'>
            <BiStation className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>Total Stations</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>{totalStationData}</strong>
            </div>
        </div>
    </Wrapper>
   
   </div>
  )
}

export default Dashboardgriditems

function Wrapper({children}) {
    
    return <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>

}