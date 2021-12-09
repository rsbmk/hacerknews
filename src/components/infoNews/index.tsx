import { Clock } from '../../icons/clock'

interface props {
  author: string
  created_at:string
  story_title:string
}

export function InfoNews ({ author, created_at, story_title }: props) {
  return (
    <aside className="infoNews">
      <div>
        <header className="timeAndAuthor">
          <Clock />
          <span>
            {created_at} by {author}
          </span>
        </header>
        <h4>{story_title || 'Title News'}</h4>
      </div>
    </aside>
  )
}
