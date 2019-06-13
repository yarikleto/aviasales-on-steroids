import React, { useEffect, useCallback } from 'react'

import DefaultLayout from 'layouts/Default'
import { TicketFilters, TicketList } from 'components'
import { formatMoneyByCode, getFortammedDate } from 'utils/helpers'
import { useTicketsStops, useTicketSelectors, useFetchTickets, useFetchCurrency } from 'sharedHooks'
import useTicketsFilterReducer from './hooks/useTicketsFilterReducer'

const Main = () => {
  const { baseCode, codes, getCodeRate } = useFetchCurrency()
  const tickets = useFetchTickets()
  const stops = useTicketsStops(tickets)

  const [filterState, filterActions] = useTicketsFilterReducer()

  useEffect(() => {
    filterActions.setCurrencyCode(baseCode)
    filterActions.setStops(stops)
  }, [filterActions, baseCode, stops])

  const filterTicketSelector = useCallback(ticket => {
    return filterState.activeStops.includes(ticket.stops)
  }, [filterState])

  const sortTicketSelector = useCallback((ticket, nextTicket) => {
    return ticket.price - nextTicket.price
  }, [])

  const formatTicketSelector = useCallback(ticket => {
    
    const code = filterState.activeCurrencyCode

    const price = formatMoneyByCode(ticket.price * getCodeRate(code), code)
    const departure_date = getFortammedDate(ticket.departure_date)
    const arrival_date = getFortammedDate(ticket.arrival_date)
    return {
      ...ticket,
      departure_date,
      arrival_date,
      price,

    }
  }, [getCodeRate, filterState])

  const resultTickets = useTicketSelectors(tickets, {
    filterSelector: filterTicketSelector,
    sortSelector: sortTicketSelector,
    formatSelector: formatTicketSelector
  })

  return (
    <DefaultLayout>
      <TicketFilters
        state={filterState}
        actions={filterActions}
        codes={codes}
      />
      <TicketList tickets={resultTickets}/>
    </DefaultLayout>
  )
}

export default Main
