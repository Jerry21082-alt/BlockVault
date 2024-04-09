import React from 'react'

export default function Chart({ children }) {
  return (
    <div className='w-[75%] h-full bg-secondarySemiDark rounded-lg p-4'>
      {children}
    </div>
  )
}
