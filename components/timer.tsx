'use client'
import { useState, useEffect } from 'react'

export function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => setTime(t => t + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
      <div className="text-2xl font-mono">{formatTime(time)}</div>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black rounded-md hover:opacity-80"
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={() => { setTime(0); setIsRunning(false) }}
        className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:opacity-80"
      >
        Reset
      </button>
    </div>
  )
}