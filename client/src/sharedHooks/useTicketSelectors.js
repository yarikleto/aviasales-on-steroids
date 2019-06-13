import useFilter from './useFilter'
import useSort from './useSort'
import useFormat from './useFormat'

const useTicketSelectors = (tickets, { filterSelector, sortSelector, formatSelector }) => {
  let resultTickets = [...tickets]

  resultTickets = useFilter(resultTickets, filterSelector)
  resultTickets = useSort(resultTickets, sortSelector)
  resultTickets = useFormat(resultTickets, formatSelector)

  return resultTickets
}

export default useTicketSelectors