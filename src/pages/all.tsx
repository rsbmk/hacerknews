import { useState } from 'react'
import { NewsList } from '../components/newsList'
import { SelectTopic } from '../components/searchNews'
import { UseNews } from '../hooks/news'
import { AllNewsHeader } from '../components/headers/allnews'

export function AllNews () {
  // read topic in the localStorage
  const [topic, setTopic] = useState(() => window.localStorage.getItem('topic') || 'reactjs')
  const { arrayNewsData, isError, loading } = UseNews({ topic })

  if (isError) return <h1>There was an error getting the news results.</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <>
      <AllNewsHeader/>
      <SelectTopic setTopic={setTopic} topic={topic} />
      <NewsList arrayNews={arrayNewsData} />
    </>
  )
}
