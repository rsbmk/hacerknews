import { useState } from 'react'
import { UseNews } from '../hooks/news'
import { NewsList } from '../components/newsList'
import { SelectTopic } from '../components/searchNews'
import { AllNewsHeader } from '../components/headers/allnews'
import { Pagination } from '../components/pagination'
import { Spinner } from '../components/spinner'

export function AllNews () {
  // read topic in the localStorage
  const [topic, setTopic] = useState(() => window.localStorage.getItem('topic') || 'reactjs')
  const { isError, loading, newsData, page, setPage } = UseNews({ topic })

  if (isError) return <h1>There was an error getting the news results.</h1>
  if (loading) return <Spinner/>

  return (
    <>
      <AllNewsHeader />
      <SelectTopic setTopic={setTopic} topic={topic} />
      <NewsList arrayNews={newsData} />
      <Pagination page={page} setPage={setPage} />
    </>
  )
}
