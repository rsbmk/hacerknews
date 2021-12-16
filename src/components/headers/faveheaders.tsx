import { Meta, Title } from 'react-head'

export function FaveHeaders () {
  return (
    <>
      <Title>My faves | Hacerk News</Title>
      <Meta name="description" content="Your favorite news in doing news" />
      <Meta property="og:title" content="All News | Hacker News" />
      <Meta property="og:description" content="Your favorite news in doing news" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://hacerknews.vercel.app/all" />
    </>
  )
}
