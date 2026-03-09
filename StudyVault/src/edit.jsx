import React, { useState } from 'react'
import { Target, Settings, X } from 'lucide-react'

const GoalRow = ({ label, current, goal, color }) => {
  const progress = goal > 0 ? Math.min((current / goal) * 100, 100) : 0

  return (
    <div className='space-y-1'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-sm font-medium text-gray-700'>{label}</span>
        <span className='text-sm text-gray-700'>{current}/{goal}</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div
          className={`h-2 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

const EditGoalsModal = ({ goals, onClose, onSave }) => {
  const [values, setValues] = useState({
    1: goals.find(g => g.id === 1)?.goal ?? 8,
    2: goals.find(g => g.id === 2)?.goal ?? 8,
    3: goals.find(g => g.id === 3)?.goal ?? 8,
  })
  const [error, setError] = useState('')

  const handleChange = (id, val) => {
    setValues(v => ({ ...v, [id]: val.replace(/[^0-9]/g, '') }))
    setError('')
  }

  const handleSubmit = () => {
    const parsed = { 1: parseInt(values[1]), 2: parseInt(values[2]), 3: parseInt(values[3]) }
    if (Object.values(parsed).some(v => !v || v <= 0)) {
      return setError('Please enter valid numbers for all fields.')
    }
    onSave(parsed)
    onClose()
  }

  const fields = [
    { id: 1, label: 'Pomodoros', accent: 'focus:ring-red-400', dot: 'bg-red-400' },
    { id: 2, label: 'Tasks Completed', accent: 'focus:ring-green-400', dot: 'bg-green-400' },
    { id: 3, label: 'Study Hours', accent: 'focus:ring-blue-400', dot: 'bg-blue-400' },
  ]

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm' onClick={onClose} />
      <div className='relative bg-white rounded-2xl shadow-2xl p-6 w-72 z-10'>

        <div className='flex items-center justify-between mb-5'>
          <h4 className='text-base font-bold text-gray-800 flex items-center gap-2'>
            <Settings size={18} className='text-blue-600' />
            Edit Daily Goals
          </h4>
          <button onClick={onClose} className='text-gray-400 hover:text-gray-600 transition-colors'>
            <X size={18} />
          </button>
        </div>

        <div className='space-y-3'>
          {fields.map(f => (
            <div key={f.id}>
              <label className='flex items-center gap-2 text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide'>
                <span className={`w-2 h-2 rounded-full ${f.dot}`} />
                {f.label}
              </label>
              <input
                type='text'
                inputMode='numeric'
                value={values[f.id]}
                onChange={e => handleChange(f.id, e.target.value)}
                maxLength={5}
                className={`w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 ${f.accent} transition`}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              />
            </div>
          ))}
          {error && <p className='text-xs text-red-500 font-medium'>{error}</p>}
        </div>

        <div className='flex gap-2 mt-6'>
          <button
            onClick={onClose}
            className='flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='flex-1 py-2 rounded-lg bg-blue-600 text-sm text-white font-semibold hover:bg-blue-700 transition'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

const DailyGoals = () => {
  const [goals, setGoals] = useState([
    { id: 1, label: 'Pomodoros', current: 0, goal: 8, color: 'bg-red-400' },
    { id: 2, label: 'Tasks Completed', current: 0, goal: 8, color: 'bg-green-400' },
    { id: 3, label: 'Study Hours', current: 0, goal: 8, color: 'bg-blue-400' },
  ])
  const [showModal, setShowModal] = useState(false)

  const handleSaveAll = (parsed) => {
    setGoals(prev => prev.map(g => ({ ...g, goal: parsed[g.id] ?? g.goal })))
  }

  return (
    <div>
      {showModal && (
        <EditGoalsModal
          goals={goals}
          onClose={() => setShowModal(false)}
          onSave={handleSaveAll}
        />
      )}

      <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-bold flex items-center gap-2'>
            <Target size={20} className='text-blue-600' />
            Daily Goals
          </h3>
          <button
            onClick={() => setShowModal(true)}
            className='flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors'
          >
            <Settings size={13} />
            Edit Goals
          </button>
        </div>

        <div className='space-y-4'>
          {goals.map(g => (
            <GoalRow
              key={g.id}
              label={g.label}
              current={g.current}
              goal={g.goal}
              color={g.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DailyGoals