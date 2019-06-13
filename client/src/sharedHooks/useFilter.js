import { useMemo } from 'react'

const useFilter = (items, filterSelector) => {
  if  (filterSelector && typeof filterSelector !== 'function') {
    throw new Error(`Prop "filterSelector" isn't a function`)
  }

  return useMemo(
    () => filterSelector ? items.filter(filterSelector) : items,
    [items, filterSelector]
  )
}

export default useFilter