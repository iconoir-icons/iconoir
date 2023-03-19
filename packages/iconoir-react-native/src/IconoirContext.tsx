import React from 'react'
import { SvgProps } from 'react-native-svg'

export type IconoirContextValue = Partial<SvgProps>
export const IconoirContext = React.createContext<IconoirContextValue>({})

export interface IconoirProviderProps {
  iconProps?: Partial<Omit<SvgProps, 'children'>>
  children: React.ReactNode
}
export function IconoirProvider({ iconProps, children }: IconoirProviderProps) {
  return <IconoirContext.Provider value={iconProps || {}} children={children} />
}
