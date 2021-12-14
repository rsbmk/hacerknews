import { useContext } from 'react'
import { FaveHeaders } from '../components/headers/faveheaders'
import { NewsList } from '../components/newsList'
import contextFaves from '../context/favesProvider'

export function Faves () {
  const { favs } = useContext(contextFaves)
  if (favs.length === 0) return <h2 className='noFaves'>You have no news in favorite</h2>
  return (
    <>
      <FaveHeaders />
      <NewsList arrayNews={favs}/>
    </>
  )
}
