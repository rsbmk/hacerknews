import { useState } from 'react'
import { NewsList } from '../components/newsList'
import { SelectTopic } from '../components/searchNews'
import { getNews } from '../hooks/news'

export function AllNews () {
  // save topic in the localStorage
  const [topic, setTopic] = useState(window.localStorage.getItem('topic') || '')
  const { arrayNewsData, isError, loading } = getNews({ topic })
  console.log(arrayNewsData)

  if (isError) return <h1>There was an error getting the news results.</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <SelectTopic setTopic={setTopic} topic={topic} />
      <NewsList arrayNews={arrayNewsData.hits} />
    </>
  )
}
