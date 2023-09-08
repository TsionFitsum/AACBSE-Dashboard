import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Updatebus() {
    const{ busid }=useParams();
    const[id,idchange]=useState("");
    const[plate_number,platenochange]=useState("");
    const[bus_route,routeechange]=useState("");
    const[date_created,datecreatedchange]=useState("");
    
    
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const stationdata=({id,plate_number,bus_route,date_created});
      
       fetch("https://addisbuss.onrender.com/api/admin/bus/" + busid,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(stationdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/bus');
       }).catch((err)=>{
        console.log(err.message);
      })
    }

   
   // const[busdata,busdatachange]=useState("");
   useEffect(()=>{
    fetch("https://addisbuss.onrender.com/api/admin/bus/"+busid).then((res)=>{
        return res.json();
      }).then((resp)=>{
       
        platenochange(resp.plate_number);
        routeechange(resp.bus_route);
        datecreatedchange(resp.date_created);

      }).catch((err)=>{
        console.log(err.message);
      })
},[]);



  return (
    <div >
<div><h1 className="text-xl mb-4 text-blue-700 text-center">Update Bus</h1></div>
<div className='flex justify-center items-center h-1/2'>

<div className="w-1/2 bg-white p-6 rounded-lg shadow-md" >

    <form class="w-full max-w-lg" onSubmit={handlesubmit}>
    <div class="flex flex-wrap -mx-3 mb-6">
                       

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="plate_no">
                               Plate Number
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="plate_no" type="text" 
                                value={plate_number} required onChange={e => platenochange(e.target.value)}>
                            </input>
                        </div>


                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bus-route">
                                Bus Route
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="bus-route" type="text" 
                                value={bus_route} required onChange={e => routeechange(e.target.value)}>
                            </input>
                        </div>

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date-created">
                                Date Created
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date-created" type="text" 
                                value={date_created} required onChange={e => datecreatedchange(e.target.value)}>
                            </input>
                        </div>

        

                           

                        </div>

                        <div className='flex flex-col space-y-4 justify-center items-center'>
                                <div className='flex gap-4 p-7 w-full items-center ' >
                                    <button className='text-green-700 cursor-pointer text-xl' type="submit" >Save</button>
                                    <Link to="/bus" className='text-red-700 cursor-pointer text-xl hover:no-underline' >Back</Link>

                                </div>

                            </div>



                </form>


            </div>


        </div>

        </div>
  )
}

export default Updatebus