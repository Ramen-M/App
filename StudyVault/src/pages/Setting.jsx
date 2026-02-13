import React from 'react'
import { Download } from 'lucide-react'

const Setting = () => {
  return (
    <div className='spcae-y-6'>
      <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6'>
        <h1 className='text-3xl font-bold mb-6'>Settings</h1>

        <div className='space-y-6'>
          {/* Profile Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>Profile</h3>
            <div className='space-y-3'>
              <input
                type="text"
                placeholder='Your Name'
                className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-purple-500 focus:outline-none'
              />
              <input
                type="text"
                placeholder='Email Address'
                className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-purple-500 focus:outline-none'  
              />
            </div>
          </div>

          {/* Pomodoro Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>Pomodoro Settings</h3>
            <div className='space-y-3'>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between'>
                <span className='font-medium'>Work Duration</span>
                <select className='border-2 border-gray-300 px-3 py-2 rounded-lg'>
                  <option>25 minutes</option>
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>60 minutes</option>
                </select>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between'>
                <span className='font-medium'>Short Break</span>
                <select className='border-2 border-gray-300 px-3 py-2 rounded-lg'>
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                  <option>15 minutes</option>
                </select>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between'>
                <span className='font-medium'>Long Break</span>
                <select className='border-2 border-gray-300 px-3 py-2 rounded-lg'>
                  <option>15 minutes</option>
                  <option>20 minutes</option>
                  <option>30 minutes</option>
                </select>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>Preferences</h3>
            <div className='space-y-3'>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all'>
                <span className='font-medium'>Voice Commands</span>
                <input type="checkbox" className='w-5 h-5 cursor-pointer'/>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all'>
                <span className='font-medium'>Sound Notifications</span>
                <input type="checkbox" className='w-5 h-5 cursor-pointer'/>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all'>
                <span className='font-medium'>Daily Reminder</span>
                <input type="checkbox" className='w-5 h-5 cursor-pointer'/>
              </div>
              <div className='bg-gray-50 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all'>
                <span className='font-medium'>Auto-save Notes</span>
                <input type="checkbox" className='w-5 h-5 cursor-pointer'/>
              </div>
            </div>
          </div>

          {/* Data Management Section */}
          <div>
            <h3 className='text-lg font-bold mb-3'>Data Management</h3>
            <div className='flex items-center gap-4'>
              <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all'>
                <Download size={18}/>
                Export All Data
              </button>
              <button className='text-white font-medium bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-all'>Clear All Data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
