import React from 'react'
import { Target } from 'lucide-react'

const DailyGoals = () => {
  return (
    <div>
      {/* Daily Goals Progress */}
      <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
        <h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
          <Target size={20} className='text-blue-600'/>
          Daily Goals
        </h3>
        <div className='space-y-4'>
          <div className='flex justify-between mb-2'>
            <span className='text-sm font-medium text-gray-700'>Pomodoros</span>
            <span className='text-sm text-gray-700'>0/8</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='border-none'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-sm font-medium text-gray-700'>Task Completed</span>
            <span className='text-sm text-gray-700'>0/8</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='border-none'></div>
          </div>
          <div className='flex justify-between mb-2'>
            <span className='text-sm font-medium text-gray-700'>Study Hours</span>
            <span className='text-sm text-gray-700'>0/8</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='border-none'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DailyGoals
