import { useMemo } from 'react'
import { useQuery } from 'graphql-hooks'

const QUERY = `query {
  tickets {
    origin
    origin_name
    destination
    destination_name
    departure_date
    departure_time
    arrival_date
    arrival_time
    carrier
    stops
    price
  }
}`

const useFetchTickets = () => {
  const { data } = useQuery(QUERY)


  return useMemo(() => {
    return data?.tickets || []
  }, [data])
}

export default useFetchTickets