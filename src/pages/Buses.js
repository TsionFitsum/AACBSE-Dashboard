import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';

//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
//import Viewstation from '../components/Viewstation';

function Buses() {
  const navigate= useNavigate();
  const[busdata,busdatachange]=useState(null);
  const[search,setSearch]=useState('');

const ViewBus=(id)=>{
  navigate("/bus/viewbus/" + id );
}
const UpdateBus=(id)=>{
  navigate("/bus/updatebus/" + id );
}
const DeleteBus=(id)=>{
  if(window.confirm('Do you want to delete this?')){
    fetch("https://addisbuss.onrender.com/api/admin/bus/"+id,{
        method:"DELETE"
       }).then((res)=>{ 
alert('Deleted successfully');
window.location.reload();
navigate('/bus');
       }).catch((err)=>{
        console.log(err.message);
      })
    }
  }
  




    useEffect(()=>{
      fetch("https://addisbuss.onrender.com/api/admin/buses").then((res)=>{
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
        <button onClick={() => navigate('/bus/addbus')} className=" text-center block border border-blue-500 rounded py-2 px-4
         bg-blue-500 hover:bg-blue-700 text-white" >Add Bus</button>
        </div>
        
      <div className='bg-white m-4  pt-3 pb-4 rounded-sm border border-gray-200 flex flex-col items-center  '>
      <strong><h1 className="text-xl mb-4 text-blue-900 text-left">Buses</h1></strong>
      <div className=' flex items-center m-5 max-w-full overflow-x-auto' >
         <div className=" flex items-center justify-center">
      <div className="max-w-full">
        <div className="overflow-x-auto">
        <div className="max-h-64 overflow-y-auto">
    <table className="table-fixed">
    <thead >
        <tr>
        <td>ID</td>
          <td>Plate Number</td>
          <td>Bus Route</td>
          <td>Password</td>
          <td>Date created</td>
          <td>Action</td>

         
        </tr>
      
     

        </thead>
        <tbody>
        {busdata && busdata.map &&
            busdata.filter((item) => {
              return search.toLowerCase()=== '' ? item: item.plate_number.toString().includes(search) 
              || item.bus_route.toString().includes(search) || item.date_created.toString().includes(search) ;
            }).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.plate_number}</td>
                <td>{item.bus_route}</td>
                <td>*******</td>
                <td>{item.date_created}</td>
                <td className='flex gap-4 p-7'>
                
                  <button onClick={()=>{UpdateBus(item.id)}}className="text-red-700 cursor-pointer text-xl">Update</button>
                  <button onClick={()=>{ViewBus(item.id)}} className=" text-green-700 cursor-pointer text-xl">View</button>
                  <button onClick={()=>{DeleteBus(item.id)}}className=" text-blue-700 cursor-pointer text-xl">Delete</button></td>

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


export default Buses