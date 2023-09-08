import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';

//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
//import Viewstation from '../components/Viewstation';

function Stations() {
  const navigate= useNavigate();
  const[busdata,busdatachange]=useState(null);
  const [search,setSearch]=useState('');

const ViewStations=(id)=>{
  navigate("/stations/viewstation/" + id );
}
const UpdateStations=(id)=>{
  navigate("/stations/updatestation/" + id );
}
const DeleteStations=(id)=>{
  if(window.confirm('Do you want to delete this?')){
    fetch("https://addisbuss.onrender.com/api/admin/stations/"+id,{
        method:"DELETE"
       }).then((res)=>{ 
alert('Deleted successfully');
window.location.reload();
navigate('/stations');
       }).catch((err)=>{
        console.log(err.message);
      })
    }
  }
  

    useEffect(()=>{
      fetch("https://addisbuss.onrender.com/api/admin/stations").then((res)=>{
        return res.json();
      }).then((resp)=>{
        busdatachange(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    },[]);

  return(
    <>

<div className='relative m-4 '>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
            <input type='text' placeholder='Search for items' onChange={(e) =>setSearch(e.target.value)}
            className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 px-4 '></input>
        </div>
       
<div className='fixed top-20 right-5 m-4'>
<button onClick={() => navigate('/stations/addstation')} className=" text-center block border border-blue-500 rounded py-2 px-4
         bg-blue-500 hover:bg-blue-700 text-white" >Add Station</button>
</div>


      <div className='bg-white m-4 px-7 pt-3 pb-4 rounded-sm border border-gray-200 flex flex-col items-center  '>
      <strong className='text-blue-900 '>Stations</strong>
      <div className=' flex items-center m-5 max-w-full overflow-x-auto' >
         <div className=" flex items-center justify-center">
      <div className="max-w-full">
        <div className="overflow-x-auto">
        <div className="max-h-64 overflow-y-auto">
    <table className="table-fixed">
    <thead >
        <tr>
        <td>ID</td>
          <td>Station Name</td>
          <td>Longitude</td>
          <td>Latitude</td>
          <td>Routes</td>
          <td>Action</td>
        </tr>
      
     

        </thead>
        <tbody>
        {busdata && busdata.map &&
            busdata.filter((item) => {
              return search.toLowerCase()=== '' ? item: item.station_name.toLowerCase().includes(search) 
              || item.longitude.toString().includes(search) || item.latitude.toString().includes(search) ;
            }).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.station_name}</td>
                <td>{item.longitude}</td>
                <td>{item.latitude}</td>
                <td>{item.route}</td>

                <td className='flex gap-4 p-7'>
                
                  <button onClick={()=>{UpdateStations(item.id)}}className="text-red-700 cursor-pointer text-xl">Update</button>
                  <button onClick={()=>{ViewStations(item.id)}} className=" text-green-700 cursor-pointer text-xl">View</button>
                  <button onClick={()=>{DeleteStations(item.id)}}className=" text-blue-700 cursor-pointer text-xl">Delete</button></td>

              </tr>
            ))}
        </tbody>

      </table>
      </div>
      </div>
      </div>
      </div>
      </div>
     
      </div>
      </>

    
  )}


export default Stations