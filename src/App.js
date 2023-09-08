import './App.css';
//import Dashboardcomp from './components/Dashboardcomp';
//import Sidebarr from './components/Sidebarr';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Routees from './pages/Routees';
import Stations from './pages/Stations';
import Buses from './pages/Buses';
import Addroute from './components/Addroute';
import Updateroute from './components/Updateroute';
import Viewroute from './components/Viewroute';
import Updatebus from './components/Updatebus';
import Viewbus from './components/Viewbus';
import Addbus from './components/Addbus';
import Addstation from './components/Addstation';
import Updatestation from './components/Updatestation';
import Viewstation from './components/Viewstation';
import Login from './pages/Login';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
//import Bus from './pages/Bus';
//import Stations from './pages/Stations';
//import Routess from './pages/Routess';
//import Dashbrd from './pages/Dashbrd';

function App() {
  return (
    <>
    <Router>
   <div>
   <ToastContainer />
   </div>
      
    <Routes>
   
    <Route path='/' element={<Login />}/>
   <Route path="/" element={<Layout />}>
    <Route path='/dashboard' index element={<Dashboard />}/>
    <Route path="/route" element={<Routees />}/>
    <Route path="/route/addroute" element={<Addroute />}/>
    <Route path='/route/updateroute/:busid' element={<Updateroute />}/>
    <Route path='/route/viewroute/:busid' element={<Viewroute />}/>
    <Route path='/bus/updatebus/:busid' element={<Updatebus />}/>
    <Route path='/bus/viewbus/:busid' element={<Viewbus />}/>
    <Route path="/bus/addbus" element={<Addbus />}/>
    <Route path="/stations" element={<Stations />}/>
    <Route path="/stations/addstation" element={<Addstation />}/>
    <Route path='/stations/updatestation/:busid' element={<Updatestation />}/>
    <Route path='/stations/viewstation/:busid' element={<Viewstation />}/>
    <Route path="/bus" element={<Buses />}/>
  </Route>
   

   

    </Routes>


    </Router>



   


    </>





  );
}

export default App;
