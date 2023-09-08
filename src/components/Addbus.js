import React from 'react'
import  {  useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'; 



const Addbus = () => {
    const[id,idchange]=useState("");
    const[plate_number,platenochange]=useState("");
    const[route_no,routeechange]=useState("");
    const[date_created,datecreatedchange]=useState("");
    
    
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const routedata=({plate_number,route_no,date_created});
      
      fetch("https://addisbuss.onrender.com/api/admin/buses",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(routedata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/bus');
       }).catch((err)=>{
        console.log(err.message);
      })
    }

    return(
        <div>

<div><h1 className="text-xl mb-4 text-blue-700 text-center">Add Buses</h1></div>

<div className='flex justify-center items-center h-1/2'>

    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md" >

        <form class="w-full max-w-lg" onSubmit={handlesubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
                          
        <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="plate-number">
                                    Id
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="plate-number"
                                    type="text"  value={id} required onChange={e => idchange(e.target.value)}>
                                </input>
                            </div>






                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="plate-number">
                                    Plate Number
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="plate-number"
                                    type="text"  value={plate_number} required onChange={e => platenochange(e.target.value)}>
                                </input>
                            </div>

                           


                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="bus-route">
                                    Bus Route
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="bus-route"
                                    type="text" 
                                     value={route_no} required onChange={e => routeechange(e.target.value)}>
                                </input>
                            </div>


                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="date-created">
                                    Date Created
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="date-created"
                                    type="text"  value={date_created} required onChange={e =>datecreatedchange(e.target.value)}>
                                </input>
                            </div>



                    
                           

                            <div >
                                <div className='flex gap-4 p-7 w-full '>
                                    <button className='inline-block border border-green-900 rounded py-1 px-3 bg-green-700
                         text-white cursor-pointer text-xl hover:no-underline' type="submit" >Save</button>
                                    <Link className='inline-block border border-red-900 rounded py-1 px-3 bg-red-700
                         text-white cursor-pointer text-xl hover:no-underline' to="/bus" >Back</Link>

                                </div>

                            </div>


                        </div>

                  


                </form>


            </div>


        </div>

        </div>
    )
}


export default Addbus


















 