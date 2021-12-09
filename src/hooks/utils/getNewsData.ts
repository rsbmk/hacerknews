type porps = string | null
export function getNewsData ({ topic }: { topic: porps }): Promise<any> {
  return fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${topic}&page=0`)
    .then((data) => data.json())
}
