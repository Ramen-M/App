import React from 'react'
import Hero from '../components/Hero';
import DailyGoals from '../components/DailyGoals';
import PomodoroWidget from '../components/PomodoroWidget';
import QuickStats from '../components/QuickStats';
import QuickTasks from '../components/QuickTasks';
import QuickActions from '../components/QuickActions';

const Home = () => {
  return (
    <div className='space-y-6'>
      <Hero />
      <DailyGoals />
      <PomodoroWidget />
      <QuickStats />
      <QuickTasks />
      <QuickActions />
    </div>
  )
}

export default Home
