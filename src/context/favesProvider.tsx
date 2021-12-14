import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { singleNews } from '../interfaces'

type favesProviderProps = { favs: singleNews[]; setFavs: Dispatch<SetStateAction<singleNews[]>> };
const context = createContext<favesProviderProps>({ favs: [], setFavs: () => {} })

const initialState:singleNews[] = JSON.parse(window.localStorage.getItem('faves') || '[]')

export function FaveContextProvider ({ children }: { children: ReactNode }) {
  const [favs, setFavs] = useState<singleNews[]>(initialState)
  return <context.Provider value={{ favs, setFavs }}>{children}</context.Provider>
}

export default context
