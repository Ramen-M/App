import React from 'react'
import { ListCheck } from 'lucide-react'

const QuickTasks = () => {
  return (
    <div>
      {/* Quick Tasks */}
      <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
        <div className='flex justify-between'>
          <h3 className='text-lg font-bold flex items-center gap-2'>
            <ListCheck />
            Quick Tasks
          </h3>
          <button className='text-blue-600 hover:text-blue-800 text-sm font-medium'>
            View all →
          </button>
        </div>
        <p className='text-gray-500 text-center py-4'>No tasks yet. Add your first task!</p>
      </div>
    </div>
  )
}

export default QuickTasks
