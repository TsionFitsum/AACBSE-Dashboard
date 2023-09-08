import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Updatestation() {
    const{ busid }=useParams();
    const[id,Nochange]=useState("");
    const[station_name,stationnamechange]=useState("");
    const[longitude,longitudechange]=useState("");
    const[latitude,latitudechange]=useState("");
    const[route,routeschange]=useState("");
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const stationdata=({id,station_name,longitude,latitude,route});
      
       fetch("https://addisbuss.onrender.com/api/admin/stations/" + busid,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(stationdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/stations');
       }).catch((err)=>{
        console.log(err.message);
      })
    }

   
   // const[busdata,busdatachange]=useState("");
    
    useEffect(()=>{
        fetch("https://addisbuss.onrender.com/api/admin/stations/" + busid).then((res)=>{
            return res.json();
          }).then((resp)=>{
            
           stationnamechange(resp.station_name);
           longitudechange(resp.longitude);
           latitudechange(resp.latitude);
           routeschange(resp.route);
          }).catch((err)=>{
            console.log(err.message);
          })
    },[busid]);
    


  return (
    <div>
    <div><h1 className="text-xl mb-4 text-blue-700 text-center">Update Station</h1></div>

<div className='flex justify-center items-center h-1/2'>

   <div className="w-1/2 bg-white p-6 rounded-lg shadow-md" >
  
   <form class="w-full max-w-lg" onSubmit={handlesubmit}>
<div class="flex flex-wrap -mx-3 mb-6">


<div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="station-name">
Station Name
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="station-name" 
type="text"  value={station_name} required onChange={e=>stationnamechange(e.target.value)}>
</input>
</div>



<div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="longitude">
Longitude
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="longitude" 
type="number"  value={longitude} required onChange={e=>longitudechange(e.target.value)}>
</input>
</div>


<div class="w-full md:w-1/2 px-3">
<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="latitude">
Latitude
</label>
<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="latitude" 
type="number"  value={latitude} required onChange={e=>latitudechange(e.target.value)}
style={{
'appearance': 'none',
'-moz-appearance': 'textfield',
'-webkit-appearance': 'none',
'width': '100%',
'paddingRight': '2rem', 
}}
>
</input>
</div>



<div className="w-full md:w-1/2 px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="route">
Route
</label>
<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="station-name" 
type="text" value={route} required onChange={e=>routeschange(e.target.value)}>
</input>
</div>



                  

               </div>

               <div  class="flex flex-col items-center">
                       <div className='flex gap-4 p-7 w-full ' >
                           <button className='text-green-700 cursor-pointer text-xl' onClick={handlesubmit}  >Save</button>
                           <Link className='text-red-700 cursor-pointer text-xl hover:no-underline' to="/stations" >Back</Link>

                       </div>

                  </div>
       </form>


   </div>


</div>

</div>
)
}

export default Updatestation