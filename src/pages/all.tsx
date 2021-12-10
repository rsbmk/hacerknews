
import { useState } from 'react'
import { NewsList } from '../components/newsList'
import { SelectTopic } from '../components/searchNews'
import { UsetNews } from '../hooks/news'

export function AllNews () {
  // save topic in the localStorage
  const [topic, setTopic] = useState(window.localStorage.getItem('topic') || 'reactjs')
  const { arrayNewsData, isError, loading } = UsetNews({ topic })

  if (isError) return <h1>There was an error getting the news results.</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <SelectTopic setTopic={setTopic} topic={topic} />
      <NewsList arrayNews={arrayNewsData} />
    </>
  )
}
