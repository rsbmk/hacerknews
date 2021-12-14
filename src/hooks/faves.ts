import { useContext, useEffect } from 'react'
import contextFaves from '../context/favesProvider'
import { singleNews } from '../interfaces'

export function useFaves () {
  const { setFavs, favs } = useContext(contextFaves)
  useEffect(() => window.localStorage.setItem('faves', JSON.stringify(favs)), [favs])

  const removeFaves = (id: string) => {
    setFavs(pre => pre.filter((fave) => fave.objectID !== id))
  }

  const addFaves = ({ objectID, author, created_at, story_title, story_url }: singleNews) => {
    setFavs(pre => [...pre, { objectID, author, created_at, story_title, story_url }])
  }

  return { removeFaves, addFaves }
}
