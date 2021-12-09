import { singleNews } from '../../interfaces'
import { NewsCard } from '../newsCard'

export function NewsList ({ arrayNews }:{arrayNews: singleNews[]}) {
  return (
    <main className="newsList">
      {arrayNews.map(news => (
        <NewsCard key={news.objectID} {...news}/>
      ))}
    </main>
  )
}
