import { Fragment, useEffect, useState } from 'react'
import './App.css'
import { HeatWhite } from './icons/heatWhite'

interface singleNews {
  author: string;
  commen_text: string;
  created_at: string;
  created_at_i: number;
  num_comments: number | null;
  objectID: string;
  parent_id: number;
  points: number | null;
  story_id: number;
  story_text: string | null;
  story_title: string;
  story_url: string;
  title: string | null;
  url: string | null;
}

interface NewsData {
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: Array<singleNews>;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}
const IconClock = (
  <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(-1 0 0 1 19 2)"
    >
      <circle cx="8.5" cy="8.5" r="8" />
      <path d="m8.5 5.5v4h-3.5" />
    </g>
  </svg>
)

function App () {
  const [arrayNews, setNews] = useState<NewsData>({} as NewsData)

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0')
      .then((data) => data.json())
      .then((data) => setNews(data))
  }, [])

  if (!arrayNews.hits) return <h1>Loading...</h1>
  console.log(arrayNews.hits)
  return (
    <Fragment>
      <div className="wrapTitle">
        <h1 className="title">Hacker News</h1>
      </div>
      <main className="App">
        {arrayNews.hits.map((news) => (
          <article key={news.objectID} className="cardNews">
            <aside className="infoNews">
              <div>
                <header className="timeAndAuthor">
                  {IconClock}
                  <span>
                    {news.created_at} by {news.author}
                  </span>
                </header>
                <h4>{news.story_title || 'Title News'}</h4>
              </div>
            </aside>
            <aside className="fav">
              <HeatWhite />
            </aside>
          </article>
        ))}
      </main>
    </Fragment>
  )
}

export default App
