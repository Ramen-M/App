import React from 'react'
import {Search, CheckCircle, Clock, Brain} from 'lucide-react';

const QuickStats = () => {
  return (
    <div>
      {/* Quick Stats */}
      <div className='grid grid-cols-4 gap-4'>
          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <Search className='text-blue-600' size={24}/>
              <p className='text-2xl font-bold text-gray-800'>0</p>
            </div>
            <p className='text-sm text-gray-600'>Searches</p>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <CheckCircle className='text-green-600' size={24}/>
              <p className='text-2xl font-bold text-gray-800'>0</p>
            </div>
            <p className='text-sm text-gray-600'>Tasks Done</p>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <Clock className='text-red-600' size={24}/>
              <p className='text-2xl font-bold text-gray-800'>0h</p>
            </div>
            <p className='text-sm text-gray-600'>Study Time</p>
          </div>
          <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <Brain className='text-purple-600' size={24}/>
              <p className='text-2xl font-bold text-gray-800'>0</p>
            </div>
            <p className='text-sm text-gray-600'>Flashcards</p>
          </div>
      </div>
    </div>
  )
}

export default QuickStats
