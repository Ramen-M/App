import React, { useState } from 'react'
import { Plus, ListChecks, Circle, CheckCircle, Trash2, Calendar } from 'lucide-react'

const Tasktracker = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [taskDeadline, setTaskDeadline] = useState('')
  const [taskFilter, setTaskFilter] = useState('all')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        text: newTask,
        deadline: taskDeadline,
        completed: false,
        createAt: new Date().toISOString(),
      }])
      setNewTask('')
      setTaskDeadline('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? {...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => {
    if(taskFilter === 'active') return !task.completed
    if(taskFilter === 'completed') return task.completed
    return true
  })

  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
        <h1 className='text-3xl font-bold mb-6'>Task Tracker</h1>

        {/* Input row */}
        <div className='flex gap-3 mb-6'>
          <input
           type="text"
           value={newTask}
           onChange={e => setNewTask(e.target.value)}
           onKeyDown={e => e.key === 'Enter' && addTask()}
           placeholder='What do you need to do?'
           className='flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none'
          />
          <input 
            type="date"
            value={taskDeadline}
            onChange={e => setTaskDeadline(e.target.value)}
            className='px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none'
          />
          <button 
            onClick={addTask}
            disabled={!newTask.trim()}
            className='bg-blue-500 hover:bg-blue-600 flex items-center gap-2 px-6 py-2 rounded-lg text-white'
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        <div className='flex gap-3'>
          {['all', 'active', 'completed'].map(filter => (
            <button
              key={filter}
              onClick={() => setTaskFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all
                ${
                  taskFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filteredTasks.length > 0 ? (
        <div className='space-y-3'>
          {filteredTasks.map(task => (
            <div
              key={task.id}
              className='bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-all'
            >
              <button onClick={() => toggleTask(task.id)}
                className='flex-shrink-0'  
              >
                {task.completed
                  ? <CheckCircle className='text-green-600' size={24}/>
                  : <Circle className='text-gray-400}' size={24}/>}
              </button>
              <div className='flex-1'>
                  <p className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.text}
                  </p>
                  {task.deadline && (
                    <p className='text-gray-500 text-sm flex items-center gap-1 mt-1'>
                      <Calendar size={16}/>
                      Due: {new Date(task.deadline).toLocaleDateString()}
                    </p>
                  )}
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className='text-red-500 p-2 hover:bg-red-50 rounded-lg transition-all flex-shrink-0'
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      ) : (<div className='space-y-3'>
        <div className='bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm'>
          <ListChecks size={48} className='text-gray-400 mb-4 mx-auto' />
          <h3 className='text-xl font-bold mb-2 text-gray-800'>
            {taskFilter === 'all' ? 'No Tasks Yet'
              : taskFilter === 'active' ? 'No Active Tasks' : 'No Completed Tasks'
            }
          </h3>
          <p className='text-gray-600'>Add a task above to get started</p>
        </div>
      </div>
    )}  
    </div>
  )
}

export default Tasktracker
