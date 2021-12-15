import { useState } from 'react'
import useSWR from 'swr'
import { NewsData } from '../interfaces'
import { fetcher, getURL } from './utils/getNewsData'

export function UseNews ({ topic }: { topic: string }) {
  const [page, setPage] = useState(0)
  const URI_API = getURL(topic, page)
  const { data, error } = useSWR<NewsData>(URI_API, fetcher)

  return { newsData: data, loading: !error && !data, isError: error, page, setPage }
}
