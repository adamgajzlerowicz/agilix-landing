import React from 'react'
import CheckCircle from './circle'

type Props = {
  children: React.ReactNode
}

export default function Line({ children }: Props) {
  return (
    <div className="flex items-center gap-4 py-2">
      <CheckCircle fullClass="w-8 h-8 text-green-700 shrink-0" />
      {children}
    </div>
  )
}

