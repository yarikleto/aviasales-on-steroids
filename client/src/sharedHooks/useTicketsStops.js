import { useMemo } from 'react'

import { getUniqueValues } from 'utils/helpers'

const useTicketsStops = tickets => {
  return useMemo(() => (
    getUniqueValues(
      tickets.map(ticket => ticket.stops)
    ).sort()
  ), [tickets])
}

export default useTicketsStops