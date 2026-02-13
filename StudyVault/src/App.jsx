import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Library from './pages/Library'
import Flashcards from './pages/Flashcards'
import Tasktracker from './pages/Tasktracker'
import Notes from './pages/Notes'
import Setting from './pages/Setting'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-6'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/library" element={<Library />}/>
          <Route path="/Flashcards" element={<Flashcards />}/>
          <Route path="/tasks" element={<Tasktracker />}/>
          <Route path="/notes" element={<Notes />}/>
          <Route path="/settings" element={<Setting />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
