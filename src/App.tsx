import { Fragment, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { NewsList } from './components/newsList'
import { SelectTopic } from './components/searchNews'
import { getNews } from './hooks/news'

function App () {
  // save topic in the localStorage
  const [topic, setTopic] = useState(window.localStorage.getItem('topic') || '')
  const { arrayNewsData, loading, isError } = getNews({ topic })
  console.log(isError)

  if (isError) return <h1>There was an error getting the news results.</h1>
  if (loading) return <h1>Loading...</h1>
  return (
    <Fragment>
      <Header />
      <SelectTopic setTopic={setTopic} topic={topic}/>
      <NewsList {...arrayNewsData} />
    </Fragment>
  )
}

export default App
