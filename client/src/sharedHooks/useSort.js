import { useMemo } from 'react'

const useSort = (items, sortSelector) => {
  if  (sortSelector && typeof sortSelector !== 'function') {
    throw new Error(`Prop "sortSelector" isn't a function`)
  }

  return useMemo(
    () => sortSelector ? items.sort(sortSelector) : items,
    [items, sortSelector]
  )
}

export default useSort