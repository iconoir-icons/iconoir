import React from 'react'

console.warn('Using IconoirContext in server components has no effect, because ' +
  'server components do not support React Context. If you would like to use ' +
  'IconoirContext, add \'use client\' to the top of your component.')

export interface IconoirContextValue {}
export const IconoirContext = null
interface IconoirProviderProps {
  children: React.ReactNode
}
export function IconoirProvider({ children }: IconoirProviderProps) {
  return children
}
