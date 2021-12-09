// import { Link } from 'wouter'
import { Clock } from '../../icons/clock'

export function InfoNews ({
  author,
  created_at,
  story_title,
  story_url
}: {
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
}) {
  return (
    <a href={story_url} rel='noreferrer' target="_blank" className="infoNews">
      <div>
        <header className="timeAndAuthor">
          <Clock />
          <span>
            {created_at} by {author}
          </span>
        </header>
        <h4>{story_title || 'Title News'}</h4>
      </div>
    </a>
  )
}
