import React from 'react'
import { Lightbulb, Save } from 'lucide-react'

const Search = () => {
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
        <h1 className='text-3xl font-bold mb-6'>Smart Search</h1>
        <div className='flex gap-3 mb-6'>
          <input type="text" placeholder='Search anything... (e.g., quantum physics, machine learning)' className='flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none'/>
          <button className='bg-blue-400 hover:bg-blue-500 flex items-center gap-2 px-6 py-2 rounded-lg text-white'>
            Search
          </button>
        </div>
          <div className='flex gap-2 flex-wrap'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all'>All</button>
            <button  className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all'>Article</button>
            <button  className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all'>Video</button>
            <button  className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-all'>Research</button>
          </div>
      </div>

      <div className='space-y-4'>
        <div className='bg-white border border-gray-200 rounded-xl shadow-sm p-6 hovershadow-md transition-all'>
          <div className='flex items-start justify-between mb-3'>
            <div className='flex-1'>
              <h3 className='text-xl font-bold text gray-800 mb-1'>Understanding a</h3>
              <p className='text-sm text-gray-500 flex items-center flex-wrap gap-2'>
                <span className='text-blue-700 bg-blue-100 px-2 py-1 rounded text-xs font-medium'>Wikipedia</span>
                <span>•</span>
                <span>5 min</span>
                <span>•</span>
                <span className='capitalize'>Article</span>
              </p>
            </div>
            <button className='bg-gray-100 p-2 rounded hover:bg-blue-100 hover:text-blue-500 transition-all'>
              <Save size={20}/>
            </button>
          </div>
          <p className='text-gray-600 mb-4'>a is an important concept that encompasses various aspects of knowledge and understanding. This comprehensive guide will help you learn more about it.</p>
          <div className='flex gap-2'>
            <button className='bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 text-sm font-medium transition-all'>Read More</button>
            <button className='bg-gray-50 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium transition-all'>AI Summary</button>
          </div>
        </div>
      </div>

      <div className='space-y-3'>
        <div className='bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm'>
          <Lightbulb size={48} className='text-gray-400 mb-4 mx-auto' />
          <h3 className='text-xl font-bold mb-2 text-gray-800'>Start Your Research</h3>
          <p className='text-gray-600'>Enter a topic above to search across multiple sources</p>
        </div>
      </div>
    </div>
  )
}

export default Search
