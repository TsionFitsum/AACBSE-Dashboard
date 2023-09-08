import React from 'react'
import  {  useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'; 



const Addstation = () => {
    const[id,nochange]=useState("");
    const[station_name,stationnamechange]=useState("");
    const[longitude,longitudechange]=useState("");
    const[latitude,latitudechange]=useState("");
    const[route_number,routeschange]=useState("");
    
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
       
       const stationdata=({id,station_name,longitude,latitude,route_number});
      
      fetch("https://addisbuss.onrender.com/api/admin/stations",{
        method:"POST",
        headers:{"content-type": "application/json"},
        body:JSON.stringify(stationdata)
       }).then((res)=>{ 
alert('saved successfully')
navigate('/stations');
       }).catch((err)=>{
        console.log(err.message);
      })
    }

    return(
        <div>
             <div><h1 className="text-xl mb-4 text-blue-700 text-center">Add Station</h1></div>

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
     type="text" value={route_number} required onChange={e=>routeschange(e.target.value)}>
    </input>
    </div>



                           

                        </div>

                        <div  class="flex flex-col items-center">
                                <div className='flex gap-4 p-7 w-full ' >
                                    <button className='inline-block border border-green-900 rounded py-1 px-3 bg-green-700
                         text-white cursor-pointer text-xl ' onClick={handlesubmit}  >Save</button>
                                    <Link className='inline-block border border-red-900 rounded py-1 px-3 bg-red-700
                         text-white cursor-pointer text-xl hover:no-underline' to="/stations" >Back</Link>

                                </div>

                           </div>
                </form>


            </div>


        </div>

        </div>
    )
}


export default Addstation

/*import React from 'react'
const Addstation = () => {
    return(

<form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane">
      </input>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
   
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      </input>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </input>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
   </input>
    </div>
  </div>
</form>

)}



export default Addstation;*/











 