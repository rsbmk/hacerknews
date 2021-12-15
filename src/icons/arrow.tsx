export const Arrow = ({ width = '21', height = '21', fill = 'none', direct = 'left' }) => {
  return (
    <svg direction={direct} height={height} viewBox="0 0 21 21" width={width}>
      <path
        d="m4.5 8.5-4-4 4-4"
        fill={fill}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(7 6)"
      />
    </svg>
  )
}
