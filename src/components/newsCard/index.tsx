import { HeatWhite } from '../../icons/heatWhite'
import { singleNews } from '../../interfaces'
import { InfoNews } from '../infoNews'

export function NewsCard ({ created_at, author, story_title }: singleNews) {
  return (
    <article className="cardNews">
      <InfoNews created_at={created_at} author={author} story_title={story_title} />
      <aside className="fav">
        <HeatWhite />
      </aside>
    </article>
  )
}
