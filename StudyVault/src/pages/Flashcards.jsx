import React from 'react'
import { Plus, Brain, X, Trash2 } from 'lucide-react'

const Flashcards = () => {
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>Flashcards</h1>
            <p className='text-gray-600'>0 cards created</p>
          </div>
          <button className='bg-blue-600 hover:bg-blue-700 text-white flex items-center px-6 py-3 rounded-xl gap-2'>
            <Plus size={18} />
            New Card
          </button>
        </div>
      </div>

      <div className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-xl font-bold'>Create New Flashcard</h3>
          <button className='hover:bg-gray-200 p-2 rounded-lg'>
            <X size={20}/>
          </button>
        </div>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Question/Front</label>
            <textarea 
              className='w-full border-2 border-gray-300 px-4 py-2 rounded-lg resize-none hover:border-blue-500 focus:outline-none text-gray-600'
              placeholder='Enter your question or term'
              rows = "3"
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Answer/Back</label>
            <textarea 
              className='w-full border-2 border-gray-300 px-4 py-2 rounded-lg resize-none hover:border-blue-500 focus:outline-none text-gray-600'
              placeholder='Enter your answer or defination...'
              rows= "3"
            />
          </div>
          <button disabled className='bg-blue-600 text-white w-full px-6 py-3 rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all'>
            Add Flashcard
          </button>
        </div>
      </div>

      <div className='bg-white border border-gray-200 shadow-sm p-8 rounded-lg'>
        <div className='flex items-center justify-between mb-6'>
          <span className='text-sm font-medium text-gray-600'>Card 1 of n</span>
          <button className='p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all'>
            <Trash2 size={18} />
          </button>
        </div>
        <div className='border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 min-h-[300px] flex items-center justify-center cursor-pointer hover:shadow-md transition-all'>
          <div className='text-center'>
            <p className='text-sm text-gray-500 font medium mb-4'>? Question - Click to flip</p>
            <p className='text-2xl font-bold text-gray-800 px-4'>Answer</p>
          </div>
        </div>
        <div className='flex gap-3 justify-center mt-6'>
          <button className='bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 font-medium transition-all'>← Previous</button>

          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition-all'>Show Answer</button>

          <button className='bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 font-medium transition-all'>Next →</button>
        </div>
      </div>

      <div className='bg-white border border-gray-200 shadow-sm p-6 rounded-lg'>
        <h3 className='text-lg font-bold mb-4'>All Flashcards (2)</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='border-2 border-gray-200 p-4 rounded-lg hover:shadow-md cursor-pointer transition-all'>
            <p className='font-medium text-gray-800 mb-1 truncate'>Q: a</p>
            <p className='text-sm text-gray-500'>A: a</p>
          </div>
          <div className='border-2 border-gray-200 p-4 rounded-lg hover:shadow-md cursor-pointer transition-all'>
            <p className='font-medium text-gray-800 mb-1 truncate'>Q: a</p>
            <p className='text-sm text-gray-500'>A: a</p>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-xl p-12 shadow-sm border border-gray-200 text-center'>
        <Brain size={48} className='mx-auto mb-4 text-gray-400' />
        <h3 className='text-xl font-bold text-gray-800 mb-2'>No Flashcards Yet</h3>
        <p className='text-gray-600 mb-6'>Create Flashcard to start studying</p>
        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all'>
          Create Flashcard
        </button>
      </div>
    </div>
  )
}

export default Flashcards
