import React from 'react'
import { Save, StickyNote, Clock, Edit2, Trash2 } from 'lucide-react'

const Notes = () => {
  return (
    <div className='space-y-6'>
      <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6'>
        <h1 className='text-3xl font-bold mb-6'>Quick Notes</h1>
        <div className='space-y-4'>
          <input type="text" 
            placeholder='Note title (Optional)'
            className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none'
          />
          <textarea 
            placeholder='Start typing your note here...'
            className='w-full border-2 border-gray-300 px-4 py-3 rounded-lg resize-none'
            rows="6"
          />
          <div className='flex gap-4'>
            <button 
              disabled
              className='text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-2 px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all'>
              <Save size={18}/>
              Save Note
            </button>
            <button>Cancel</button>
          </div>
        </div>
      </div>

      <div>
        <div className='felx justify-between items-center mb-4'>
          <h2 className='text-xl font-bold text-gray-800'>Your Notes (1)</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-white border border-gray-200 shadow-sm p-6 rounded-xl'>
            <div className='flex justify-between items-center mb-3'>
              <h2 className='text-lg font-bold text-gray-800 flex-1'>Title</h2>
              <div className='flex gap-2'>
                <button className='text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all'>
                  <Edit2 size={16}/>
                </button>
                <button className='text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all'>
                  <Trash2 size={16}/>
                </button>
              </div>
            </div>
            <p className='text-gray-600 whitespace-pre-wrap mb-3 line-clamp-4'>Task</p>
            <p className='text-gray-400 flex text-sm items-center gap-1'>
              <Clock size={14}/>
              2/7/2026, 12:43:12 AM
            </p>
          </div>
        </div>
      </div>

      <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-12 text-center'>
        <StickyNote size={48} className='mx-auto text-gray-400 mb-4'/>
        <h3 className='text-xl font-bold'>No Notes Yet</h3>
        <p className='text-gray-600'>Start typing above to create your first note. Each save creates a new note block!</p>
      </div>
    </div>
  )
}

export default Notes
