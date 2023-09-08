import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'; 

function Viewstation() {

    const{ busid }=useParams();
    const[busdata,busdatachange]=useState("");
    
    useEffect(()=>{
        fetch("https://addisbuss.onrender.com/api/admin/stations/"+ busid).then((res)=>{
            return res.json();
          }).then((resp)=>{
          console.log( busdatachange(resp)) ;
          }).catch((err)=>{
            console.log(err.message);
          })
    },[busid]);





  return (
<div>
<div><h1 className="text-xl mb-4 text-blue-700 text-center">View Station</h1></div>

<div className='flex justify-center items-center h-1/2'>

   <div className="w-1/2 bg-white p-6 rounded-lg shadow-md" >
  
   <form class="w-full max-w-lg" >
<div class="flex flex-wrap -mx-3 mb-6">
<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="id">
ID
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pointer-events-none caret-transparent" id="id" type="text"  
value={busdata.id} >
</input>
</div>

<div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="station-name">
Station Name
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pointer-events-none caret-transparent"
 id="station-name" 
type="text"  value={busdata.station_name} >
</input>
</div>



<div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="longitude">
Longitude
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pointer-events-none caret-transparent"
 id="longitude" 
type="number"  value={busdata.longitude} >
</input>
</div>


<div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="latitude">
Latitude
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pointer-events-none caret-transparent"
 id="latitude" 
type="number"  value={busdata.latitude} 

>
</input>
</div>



<div className="w-full md:w-1/2 px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="route">
Route
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 pointer-events-none caret-transparent"
 id="station-name" 
type="text" value={busdata.route} >
</input>
</div>



                  

               </div>

               <div  class="flex flex-col items-center">
                       <div className='flex gap-4 p-7 w-full ' >
                           
                           <Link className='text-red-700 cursor-pointer text-xl hover:no-underline' to="/stations" >Back</Link>

                       </div>

                  </div>
       </form>


   </div>


</div>
  </div>




    ///////////////////////////////////////
    /*<div className="row">

<div className="offset-lg-3 col-lg-6">
    <form className="container" >
        <div >
            <div className="card-title" ><h1>View Routes</h1></div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">

                   
        {busdata &&
        <div>
            <label>id</label>
            <h4>{busdata.id}</h4>


             <label>Route Name</label>
            <h4>{busdata.route_name}</h4>

            <label>Route Number</label>
            <h4>{busdata.route_number}</h4>
            <br></br>
       
       
        
        <Link className=" btn btn-danger" to="/route">Back</Link>
        </div>
}
    </div>
    </div>
    </div>
    </div>
    </form>
    </div>
    
</div>*/

  )
}

export default Viewstation