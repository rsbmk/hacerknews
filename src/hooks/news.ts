import useSWRInfinite from 'swr/infinite'
import { NewsData } from '../interfaces'
import { fetcher, flatData, URI_API } from './utils/getNewsData'

export function UseNews ({ topic }: { topic: string }) {
  window.localStorage.setItem('topic', topic || 'react') // save topic in localStorage

  const { data, error, size, setSize } = useSWRInfinite<NewsData>(
    (indexPage) => `${URI_API}?query=${topic}&page=${indexPage}`,
    fetcher,
    { initialSize: 1, persistSize: false }
  )
  const news = flatData(data)

  return { newsData: news, loading: !error && !data, isError: error, page: size, setPage: setSize }
}
