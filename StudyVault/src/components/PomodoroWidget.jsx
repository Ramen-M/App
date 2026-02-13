import React from 'react'
import { Timer, Play, RotateCcw } from 'lucide-react'

const PomodoroWidget = () => {
  return (
    <div>
      {/* Pomodoro Timer Widget */}
      <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-bold flex items-center gap-2'>
            <Timer size={20}/>
            Pomodoro Timer
          </h3>
        </div>
        <div className='text-center'>
          <div className='text-6xl font-bold text-gray-800 mb-4 font-mono'>25:00</div>
          <div className='flex justify-center gap-2'>
            <button className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center gap-2 transition-all'>
              <Play size={18}/>
              Start
            </button>
            <button className='px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-medium flex items-center gap-2 transition-all'>
              <RotateCcw size={18}/>
              Reset
            </button>
          </div>
          <p className='text-sm text-gray-600 mt-3'>Sessions Today: 0</p>
        </div>
      </div>
    </div>
  )
}

export default PomodoroWidget
