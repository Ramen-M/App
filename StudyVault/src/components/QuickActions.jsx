import React from 'react'
import { Search, StickyNote, Brain } from 'lucide-react'

const QuickActions = () => {
  return (
    <div>
      {/* Quick Actions */}
      <div className='grid grid-cols-3 gap-4'>
        <button className='bg-blue-600 hover:bg-blue-800 text-white rounded-xl p-6 text-left transition-all transform hover:scale-105 shadow-md'>
          <Search className='mb-3' size={28} />
          <h3 className='text-lg font-bold mb-1'>Research</h3>
          <p className='text-sm opacity-90'>Search sources</p>
        </button>
        <button className='bg-purple-600 hover:bg-purple-800 text-white rounded-xl p-6 text-left transition-all transform hover:scale-105 shadow-md'>
          <StickyNote className='mb-3' size={28} />
          <h3 className='text-lg font-bold mb-1'>Notes</h3>
          <p className='text-sm opacity-90'>Quick capture</p>
        </button>
        <button className='bg-green-600 hover:bg-green-800 text-white rounded-xl p-6 text-left transition-all transform hover:scale-105 shadow-md'>
          <Brain className='mb-3' size={28} />
          <h3 className='text-lg font-bold mb-1'>Flashcards</h3>
          <p className='text-sm opacity-90'>Study mode</p>
        </button>
      </div>
    </div>
  )
}

export default QuickActions
