// import { Link } from 'wouter'
import { useTimeAgo } from '../../hooks/utils/timeago'
import { Clock } from '../../icons/clock'
import { singleNews } from '../../interfaces'

export function InfoNews ({ author, created_at, story_title, story_url }: singleNews) {
  const timeAgo = useTimeAgo({ created_at })

  return (
    <a href={story_url} rel="noreferrer" target="_blank" className="infoNews">
      <header className="timeAndAuthor">
        <Clock />
        <span>
          {timeAgo} by {author}
        </span>
      </header>
      <h4>{story_title || 'Title News'}</h4>
    </a>
  )
}
