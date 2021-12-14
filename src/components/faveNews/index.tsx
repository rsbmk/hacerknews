import { useContext } from 'react'
import contextFav from '../../context/favesProvider'
import { useFaves } from '../../hooks/faves'
import { HeatRed } from '../../icons/heatRed'
import { HeatWhite } from '../../icons/heatWhite'
import { singleNews } from '../../interfaces'

export function FaveNews ({ objectID, author, created_at, story_title, story_url }: singleNews) {
  const { favs } = useContext(contextFav)
  const { addFaves, removeFaves } = useFaves()

  const isFav = favs.some((fav) => fav.objectID === objectID)

  const handleFave = () => {
    isFav
      ? removeFaves(objectID)
      : addFaves({ objectID, author, created_at, story_title, story_url })
  }

  return (
    <aside className="fav">
      <button onClick={handleFave}>{isFav ? <HeatRed /> : <HeatWhite />}</button>
    </aside>
  )
}
