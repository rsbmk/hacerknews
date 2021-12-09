import { NewsData } from '../../interfaces'
import { NewsCard } from '../newsCard'

export function NewsList ({ hits }:NewsData) {
  return (
    <main className="newsList">
      {hits.map(news => (
        <NewsCard key={news.objectID} {...news}/>
      ))}
    </main>
  )
}
