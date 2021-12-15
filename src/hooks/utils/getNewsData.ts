export function getURL (topic: string = 'reactjs', page: number = 0) {
  window.localStorage.setItem('topic', topic || 'react')
  return `https://hn.algolia.com/api/v1/search_by_date?query=${topic}&page=${page}` // SWR key
}

export const fetcher = (url:string) => fetch(url).then(res => res.json())
