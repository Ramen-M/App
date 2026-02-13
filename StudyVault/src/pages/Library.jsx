import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Download, Share2, BookOpen } from 'lucide-react'

const Library = () => {

  const navigate = useNavigate()
  
  return (
    <div className='space-y-6'>
      <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
        <div className='flex items-center justify-between mb-6'>
          <h1 className='text-3xl font-bold '>My Library</h1>
          <div className='flex gap-2'>
            <button className='bg-blue-50 hover:bg-blue-100 text-blue-600 flex rounded-lg px-4 py-2 items-center gap-2 font-medium text-sm transition-all'>
              <Download size={16}/>
              Export
            </button>
            <button className='bg-purple-50 hover:bg-purple-100 text-purple-600 flex rounded-lg px-4 py-2 items-center gap-2 font-medium text-sm transition-all'>
              <Share2 size={16}/>
              Share
            </button>
          </div>
        </div>
        <p className='text-gray-600'>0 saved items</p>
      </div>
      <div className='bg-white border border-gray-200 rounded-xl p-12 shadow-sm text-center'>
        <BookOpen size={48} className='text-gray-400 mx-auto mb-4'/>
        <h3 className='text-xl font-bold mb-2'>Your Library is Empty</h3>
        <p className='text-gray-600 mb-4'>Save items from your search results</p>
        <button
          onClick={() => navigate('/Search')}
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all'>
          Start Searching
        </button>
      </div>
    </div>
  )
}

export default Library
