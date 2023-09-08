import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //const handleUsernameChange = (event) => {
  //setUsername(event.target.value);
  //};
  //const handlePasswordChange = (event) => {
  //setPassword(event.target.value);
  //};
  const handleLogin = (e) => {

    // Perform login logic here
    e.preventDefault();
    if ((username === "blen" || username === "fuad" || username === "michael" || username === "tsion")
    && (password === "12345ts" )) {
      navigate('/dashboard');
    } else {
      toast.error('Incorrect username or password');
    }

  };

  return (
    



    <div>

<div className='bg-blue-500 h-[64px] min-h-[64px] px-4 flex justify-between items-center border-b border-gray-200'>
        <div >
            
        </div>
       
        <div className='flex items-center gap-2 mr-2'>
        <div as="div" className="relative inline-block text-Center">
        <div>
          
            <div >
            </div>
            <span className='text-white'>AACBSE Administrator Page</span>
          
        </div>
        </div>

        </div>
        </div>



      <div className='flex justify-center items-center h-1/2'>


        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form className=" bg-gray-300 p-4 rounded-sm shadow-md" onSubmit={handleLogin}>
            <div style={{ "textAlign": "center" }}>
              <div><h1 className="text-2xl mb-4 text-blue-700 text-center">Admin Login Page</h1></div><br></br>
              <br></br>


              <div>


                <div>
                  <div className="mb-4">

                    <label htmlFor="username" className="text-lg">Username <span className='text-red-500'>*</span></label><br></br>
                    <input className="w-1/2 bg-white border border-gray-300 rounded-md px-4 py-2"
                      value={username} required onChange={e => setUsername(e.target.value)}></input>

                  </div>

                </div>




                <div>
                  <div className="mb-4">

                    <label className="text-lg">Password <span className='text-red-500'>*</span></label><br></br>
                    <input className="w-1/2 bg-white border border-gray-300 rounded-md px-4 py-2" type='password'
                      value={password} required onChange={e => setPassword(e.target.value)}></input>

                  </div>

                </div>



                <div>
                  <div className='flex justify-center gap-4 p-7 w-full '>
                    <button onClick={handleLogin} className='text-green-700 cursor-pointer text-xl  ' type="submit">Login</button>

                  </div>

                </div>


              </div>

            </div>


          </form>


        </div>


      </div>
    </div>

  );
}

export default Login;
