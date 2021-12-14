import { MouseEvent } from 'react'
import { HeatWhite } from '../../icons/heatWhite'

export function FaveNews ({ objectID }: {objectID: string}) {
  const handleFave = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    console.log(evt.target)
  }
  return (
    <aside className="fav">
      <button onClick={handleFave}>
        <HeatWhite />
      </button>
    </aside>
  )
}
