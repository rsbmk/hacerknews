import { singleNews } from '../../interfaces'
import { NewsCard } from '../newsCard'

export function NewsList ({ arrayNews }: { arrayNews: singleNews[] | undefined }) {
  return (
    <>
      <main className="newsList">
        {arrayNews?.map((news) => (
          <NewsCard key={news.objectID} {...news} />
        ))}
      </main>
      {/* <button onClick={nextPage} className="nextPage">Next page</button> */}
    </>
  )
}
