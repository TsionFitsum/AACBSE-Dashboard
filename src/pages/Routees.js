import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';

//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
//import Viewstation from '../components/Viewstation';

function Routees() {
  const navigate= useNavigate();
  const[busdata,busdatachange]=useState(null);
  const [search,setSearch]=useState('');

const ViewRoute=(id)=>{
  navigate("/route/viewroute/" + id );
}
const UpdateRoute=(id)=>{
  navigate("/route/updateroute/" + id );
}
const DeleteRoute=(id)=>{
  if(window.confirm('Do you want to delete this?')){
    fetch("https://addisbuss.onrender.com/api/admin/routes/"+id,{
        method:"DELETE"
       }).then((res)=>{ 
alert('Deleted successfully');
window.location.reload();
navigate('/route');
       }).catch((err)=>{
        console.log(err.message);
      })
    }
  }
  




    useEffect(()=>{
      fetch("https://addisbuss.onrender.com/api/admin/routes").then((res)=>{
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
<button onClick={() => navigate('/route/addroute')} className=" text-center block border border-blue-500 rounded py-2 px-4
         bg-blue-500 hover:bg-blue-700 text-white" >Add Routes</button>
</div>



      <div className='bg-white m-4 px-7 pt-3 pb-4 rounded-sm border border-gray-200 flex flex-col items-center '>
      <strong className='text-blue-900 '>Routes</strong>
        <div className=' flex items-center m-5 max-w-full overflow-x-auto' >
         <div className=" flex items-center justify-center">
      <div className="max-w-full">
        <div className="overflow-x-auto">
        <div className="max-h-64 overflow-y-auto">
    <table className="table-fixed">
    <thead >
        <tr>
          <td>ID</td>
          <td>Route Name</td>
          <td>Route No</td>
          <td>Action</td>
         
        </tr>
      
     

        </thead>
        

       
         
        <tbody>
          {busdata && busdata.map &&
            busdata.filter((item) => {
              return search.toLowerCase()=== '' ? item: item.route_name.toLowerCase().includes(search) 
              || item.route_number.toString().includes(search) ;
            }).map(item => (
              <tr key={item.route_number}>
                <td>{item.id}</td>
                <td>{item.route_name}</td>
                <td>{item.route_number}</td>
                
                <td className='flex gap-4 p-7'>
                
                  <button onClick={()=>{UpdateRoute(item.id)}}className="text-red-700 cursor-pointer text-xl">Update</button>
                  <button onClick={()=>{ViewRoute(item.id)}} className=" text-green-700 cursor-pointer text-xl">View</button>
                  <button onClick={()=>{DeleteRoute(item.id)}}className=" text-blue-700 cursor-pointer text-xl">Delete</button></td>

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
;

export default Routees 


