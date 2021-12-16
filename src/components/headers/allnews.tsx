import { Meta, Title } from 'react-head'

export function AllNewsHeader () {
  return (
    <>
      <Title>All News | Hacerk News</Title>
      <Meta
        name="description"
        content="All news from Hacker News. The page with the latest news from the world of development. Find out about the latest news, releases and news that will help you be a better developer."
      />
      <Meta property="og:title" content="All News | Hacker News" />
      <Meta
        property="og:description"
        content="All news from Hacker News. The page with the latest news from the world of development. Find out about the latest news, releases and news that will help you be a better developer."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://hacerknews.vercel.app/all" />
    </>
  )
}
