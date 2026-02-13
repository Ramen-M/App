import React from 'react'
import { Plus, ListChecks, Circle, CheckCircle, Trash2, Calendar } from 'lucide-react'

const Tasktracker = () => {
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
        <h1 className='text-3xl font-bold mb-6'>Task Tracker</h1>
        <div className='flex gap-3 mb-6'>
          <input type="text" placeholder='What do you need to do?' className='flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none'/>
          <input type="date" className='px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none' />
          <button className='bg-blue-300 hover:bg-blue-400 flex items-center gap-2 px-6 py-2 rounded-lg text-white'>
            <Plus size={18} />
            Add
          </button>
        </div>
          <div className='flex gap-3'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all'>All</button>
            <button  className='bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-lg font-medium transition-all'>Active</button>
            <button  className='bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-lg font-medium transition-all'>Completed</button>
          </div>
      </div>

      <div className='space-y-3'>
         <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-all'>
          <button className='flex-shrink-0'>
            <Circle className='text-gray-400' size={24} />
          </button>
          <div className='flex-1'>
            <p className='font-medium'>Task Name</p>
            <p className='text-gray-500 text-sm flex items-center gap-1 mt-1'>
              <Calendar size={14}/>
              Due: 2/18/2026
            </p>
          </div>
          <button className='text-red-500 p-2 hover:bg-red-50 rounded-lg transition-all flex-shrink-0'>
            <Trash2 size={18}/>
          </button>
         </div>
      </div>

      <div className='space-y-3'>
        <div className='bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm'>
          <ListChecks size={48} className='text-gray-400 mb-4 mx-auto' />
          <h3 className='text-xl font-bold mb-2 text-gray-800'>No Tasks Yet</h3>
          <p className='text-gray-600'>Add a task above to get started</p>
        </div>
      </div>
    </div>
  )
}

export default Tasktracker
