import { Link } from 'wouter'

export function Default404 () {
  return (
    <p className='default404'>
      Ops, the page you are looking for cannot be found. <br/>
      <strong>
        You can go back to <Link href="/all"> all the news.</Link>
      </strong>
    </p>
  )
}
