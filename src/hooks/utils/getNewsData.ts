export function getURL ({ topic }: { topic: string }) {
  window.localStorage.setItem('topic', topic)
  return `https://hn.algolia.com/api/v1/search_by_date?query=${topic}&page=0`
}

export const fetcher = (url:string) => fetch(url).then(res => res.json())
