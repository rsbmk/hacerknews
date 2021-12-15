// import { UseNews } from '../../hooks/news'
import { Arrow } from '../../icons/arrow'

export function Pagination ({ page, setPage }: { page: number; setPage: (page: number) => void }) {
  return (
    <section className="nextPage">
      {page !== 0 && <button onClick={() => setPage(page - 1)}><Arrow/></button>}
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>
        <Arrow direct="rigth" />
      </button>
    </section>
  )
}
