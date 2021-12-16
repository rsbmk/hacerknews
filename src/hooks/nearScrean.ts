import { useEffect, useRef, useState } from 'react'

export function useNearScrean ({ one = true }: { one?: boolean } = {}) {
  const elemetRef = useRef<HTMLDivElement>(null!)
  const [isNearScrean, setShow] = useState(false)

  useEffect(() => {
    const onObserver = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [elem] = entries
      if (elem.isIntersecting) {
        setShow(true)
        one && observer.disconnect()
      } else {
        !one && setShow(false)
      }
    }

    const observer = new IntersectionObserver(onObserver, {
      rootMargin: '200px'
    })
    observer.observe(elemetRef.current)

    return () => observer.disconnect()
  }, [])

  return { elemetRef, isNearScrean }
}
