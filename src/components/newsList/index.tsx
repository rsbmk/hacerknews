import { singleNews } from '../../interfaces'
import { NewsCard } from '../newsCard'

export function NewsList ({ arrayNews }: { arrayNews: singleNews[] | undefined }) {
  return (
    <main className="newsList">
      {arrayNews?.map((news) => {
        if (!news.story_url) return null
        return <NewsCard key={news.objectID} {...news} />
      })}
    </main>
  )
}
