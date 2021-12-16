// import { UseNews } from '../../hooks/news'
import { useCallback, useEffect } from 'react'
import { useNearScrean } from '../../hooks/nearScrean'
import debounce from 'just-debounce-it'

export function Pagination ({ page, setPage }: { page: number; setPage: (page: number) => void }) {
  const { elemetRef, isNearScrean } = useNearScrean({ one: false })

  const handleNextPage = useCallback(
    debounce(() => setPage(page + 1), 500),
    [page]
  )

  useEffect(() => {
    if (isNearScrean) handleNextPage()
  }, [isNearScrean])

  return <div ref={elemetRef} />
}
