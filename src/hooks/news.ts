import useSWR from 'swr'
import { getURL, fetcher } from './utils/getNewsData'
import { NewsData } from '../interfaces'

export function UseNews ({ topic }: { topic: string }) {
  const URI_API = getURL({ topic })
  const { data, error } = useSWR<NewsData>(URI_API, fetcher)

  return { arrayNewsData: data?.hits, loading: !data, isError: error }
}
