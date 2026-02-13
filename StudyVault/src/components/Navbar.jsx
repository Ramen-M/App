import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Book, Home, Search, BookOpen, Brain, ListChecks, StickyNote, Settings, Navigation, Key } from 'lucide-react'

const Navbar = () => {

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/search', icon: Search, label: 'Search'},
    { path: '/library', icon: BookOpen, label: 'Library'},
    { path: '/Flashcards', icon: Brain, label: 'Flashcards'},
    { path: '/tasks', icon: ListChecks, label: 'Tasks'},
    { path: '/notes', icon: StickyNote, label: 'Notes'},
    { path: '/settings', icon: Settings, label: 'Settings'},
  ]
  return (
    <div className='bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='bg-gradient-to-r  from-blue-600 to-purple-600 rounded-lg p-2 text-white shadow-md'>
            <Book size={24}/>
          </div>
          <div>
            <h1 className='text-2xl font-bold text-gray-800'>StudyVault</h1>
            <p className='text-xs text-gray-500'>Enhanced Productivity</p>
          </div>
        </div>
        <nav className='flex gap-2'>
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              className={ ({ isActive }) =>  `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                isActive
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
              }`} 
            >
              <Icon size={18}/>
              <span className='hidden lg:inline'>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
