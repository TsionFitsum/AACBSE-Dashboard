import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';



const Addroute = () => {
    //const [id, idchange] = useState("");
    const [route_number, Routenochange] = useState("");
    const [route_name, routenamechange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        const routedata = ({  route_name, route_number });

        fetch("https://addisbuss.onrender.com/api/admin/routes", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(routedata)
        }).then((res) => {
            alert('saved successfully')
            navigate('/route');
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div>

            <div><h1 className="text-xl mb-4 text-blue-700 text-center">Add Routes</h1></div>

            <div className='flex justify-center items-center h-1/2'>

                <div className="w-1/2 bg-white p-6 rounded-lg shadow-md" >

                    <form class="w-full max-w-lg" onSubmit={handlesubmit}>
                        <div class="flex flex-wrap -mx-3 mb-6">
                           



                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="route-name">
                                    Route Name
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="route-name" type="text" 
                                    value={route_name} required onChange={e => routenamechange(e.target.value)}>
                                </input>
                            </div>





                            
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="route-number">
                                    Route Number
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="route-number" type="text" 
                                    value={route_number} required onChange={e => Routenochange(e.target.value)}>
                                </input>
                            </div>


                            
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                            </div>

                           
                            <div className='flex gap-4 p-7 w-full items-center ' >
                                    <button className='text-green-700 cursor-pointer text-xl' onClick={handlesubmit} type="submit" >Save</button>
                                    <Link className='text-red-700 cursor-pointer text-xl hover:no-underline' to="/route" >Back</Link>

                                </div>
                              

                        </div>
                       
                       

                      

            </form>


        </div>


        </div >

        </div >
    )
}


export default Addroute


















