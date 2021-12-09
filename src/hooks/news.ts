import { useEffect, useState } from 'react'
import { NewsData } from '../interfaces'
import { getNewsData } from './utils/getNewsData'

export function getNews ({ topic = '' } = {}) {
  const [arrayNewsData, setNews] = useState<NewsData>({} as NewsData)
  const [loading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    // save topic in the localStorage
    const topicToSearch = topic || window.localStorage.getItem('topic')
    getNewsData({ topic: topicToSearch })
      .then((data: NewsData) => {
        setNews(data)
        setLoading(false)
        // get topic of the localStorage
        if (topic) window.localStorage.setItem('topic', topic)
      })
      .catch(() => setError(true))
  }, [topic])

  return { arrayNewsData, loading, isError }
}
