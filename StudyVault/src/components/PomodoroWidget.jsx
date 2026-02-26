import React, { useState, useEffect } from 'react'

import { Timer, Play, Pause, RotateCcw } from 'lucide-react'

const PomodoroWidget = ({ durations }) => {

  const [time, setTime] = useState(durations.work * 60);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState('work');
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if(running === true) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime -1);
      }, 1000);
    }

    if(time === 0) {
      handleComplete();
    }

    return () => {
      clearInterval(interval);
    }
  }, [running, time]);

  useEffect(() => {
    if (!running) {
      if (mode === "work") {
        setTime(durations.work * 60);
      } else if (mode === "break") {
        setTime(durations.shortBreak * 60);
      } else {
        setTime(durations.longBreak * 60);
      }
    }
  }, [durations]);

  const toggleTimer = () => {
    if(running === true) {
      setRunning(false);
    } else {
      setRunning(true);
    }
  };

  const resetTimer = () => {
    setRunning(false);

    if(mode === 'work') {
      setTime(durations.work * 60);
    } else if (mode === 'break') {
      setTime(durations.shortBreak * 60);
    } else {
      setTime(durations.longBreak * 60);
    }
  };

  const handleComplete = () => {
    setRunning(false);

    if(mode === 'work') {
      setCount(prev => {
        let newCount = prev + 1;

        if(newCount % 4 === 0) {
          setMode('longBreak');
          setTime(durations.longBreak * 60);
        } else {
          setMode('break');
          setTime(durations.shortBreak * 60);
        }

        return newCount;
      });

    } else {
      setMode('work');
      setTime(durations.work * 60);
    }
  };

  const formatTime = (seconds) => {
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;

    return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  };

  return (
    <div>
      {/* Pomodoro Timer Widget */}
      <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-200'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-bold flex items-center gap-2'>
            <Timer size={20}/>
            Pomodoro Timer
          </h3>
          <span className={`text-sm px-3 py-1 rounded-full font-medium ${
            mode === 'work' ? 'bg-red-100 text-red-700' : 
            mode === 'break' ? 'bg-green-100 text-green-700' : 
            'bg-blue-100 text-blue-700'
          }`}>
            {mode === 'work' ? '🎯 Focus' : mode === 'break' ? '☕ Break' : '🌟 Long Break'}
          </span>
        </div>
        <div className='text-center'>
          <div className='text-6xl font-bold text-gray-800 mb-4 font-mono'>{formatTime(time)}</div>
          <div className='flex justify-center gap-2'>
            <button
              onClick={toggleTimer}
              className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center gap-2 transition-all'>
              {running ? <Pause size={18} /> : <Play size={18}/> }

              {running ? 'Pause' : 'Start' }
            </button>
            <button
              onClick={resetTimer}
              className='px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl font-medium flex items-center gap-2 transition-all'>
              <RotateCcw size={18}/>
              Reset
            </button>
          </div>
          <p className='text-sm text-gray-600 mt-3'>Sessions Today: {count}</p>
        </div>
      </div>
    </div>
  )
}

export default PomodoroWidget
