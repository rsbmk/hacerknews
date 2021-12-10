import { singleNews } from '../../interfaces'
import { FaveNews } from '../faveNews'
import { InfoNews } from '../infoNews'

export function NewsCard ({ created_at, author, story_title, story_url, objectID }: singleNews) {
  return (
    <article className="cardNews">
      <InfoNews created_at={created_at} author={author} story_title={story_title} story_url={story_url}/>
      <FaveNews objectID={objectID}/>
    </article>
  )
}
