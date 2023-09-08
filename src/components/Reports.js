import React from 'react'

function Reports() {
  return (
    <div className='bg-white m-4 px-7 pt-3 pb-4 rounded-sm border border-gray-200  '>
        <strong className='text-gray-700 '>Reports</strong>
        <div className=' flex items-center m-5 ' >
            <table>
                <thead>
                    <tr>
                        <td>Bus Plate No</td>
                        <td>Route No</td>
                        <td>Cycle Count</td>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>bs8000</td>
                        <td>41</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Reports