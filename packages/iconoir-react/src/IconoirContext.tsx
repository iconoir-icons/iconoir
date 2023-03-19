import React from 'react'

export type IconoirContextValue = Partial<React.SVGProps<SVGSVGElement>>
export const IconoirContext = React.createContext<IconoirContextValue>({})

export interface IconoirProviderProps {
  iconProps?: Partial<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
}
export function IconoirProvider({ iconProps, children }: IconoirProviderProps) {
  return <IconoirContext.Provider value={iconProps || {}} children={children} />
}
