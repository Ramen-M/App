import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../shared/components/Navbar'
import Home from '../features/dashboard/pages/Home'
import Search from '../pages/Search'
import Library from '../pages/Library'
import Flashcards from '../features/flashcards/pages/Flashcards'
import Tasktracker from '../features/tasks/pages/Tasktracker'
import Notes from '../features/notes/pages/Notes'
import Setting from '../features/settings/pages/Setting'

function App() {

  const [durations, setDurations] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-6'>
        <Routes>
          <Route path="/" element={<Home durations={durations} />}/>
          {/*<Route path="/search" element={<Search />}/>
          <Route path="/library" element={<Library />}/>*/}
          <Route path="/flashcards" element={<Flashcards />}/>
          <Route path="/tasks" element={<Tasktracker />}/>
          <Route path="/notes" element={<Notes />}/>
          <Route path="/settings" element={<Setting durations={durations} setDurations={setDurations} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
