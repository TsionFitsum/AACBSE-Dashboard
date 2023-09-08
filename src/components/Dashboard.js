import React from 'react'
//import Dashboardgriditems from './Dashboardgriditems'
import Reports from './Reports'
import Dashbrdgrid from './Dashbrdgrid'

function Dashboard() {
  return (

    <div className='flex flex-col gap-4'>
        <Dashbrdgrid />
        <div className='flex flex-row gap-4 w-full'> 
            <Reports />
        </div>

    </div>
   
  )
}

export default Dashboard