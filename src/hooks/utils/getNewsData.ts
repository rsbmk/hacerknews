import { NewsData, singleNews } from '../../interfaces'

export const flatData = (data: NewsData[] | undefined) => {
  const allData:singleNews[] = []
  data?.forEach(news => {
    news.hits?.forEach(hit => {
      allData.push(hit)
    })
  })
  return allData
}

export const fetcher = (url:string) => fetch(url).then(res => res.json())

export const URI_API = 'https://hn.algolia.com/api/v1/search_by_date'
