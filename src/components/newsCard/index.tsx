import { singleNews } from '../../interfaces'
import { FaveNews } from '../faveNews'
import { InfoNews } from '../infoNews'

export function NewsCard (singleNews: singleNews) {
  return (
    <article className="cardNews">
      <InfoNews {...singleNews}/>
      <FaveNews {...singleNews}/>
    </article>
  )
}
