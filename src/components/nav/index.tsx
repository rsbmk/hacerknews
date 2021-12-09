import { Link } from 'wouter'
export function Nav ({ isActive }: { isActive: Boolean }) {
  const [allActive, favActive] = isActive ? ['itemActive', ''] : ['', 'itemActive']
  return (
    <section className="sectionNav">
      <nav className="navs">
        <Link to="/all" className={allActive}>All</Link>
        <Link href="/faves" className={favActive}>My faves</Link>
      </nav>
    </section>
  )
}
