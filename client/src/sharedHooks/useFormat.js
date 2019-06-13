import { useMemo } from 'react'

const useFormat = (items, formatSelector) => {
  if  (formatSelector && typeof formatSelector !== 'function') {
    throw new Error(`Prop "formatSelector" isn't a function`)
  }

  return useMemo(
    () => formatSelector ? items.map(formatSelector) : items,
    [items, formatSelector]
  )
}

export default useFormat