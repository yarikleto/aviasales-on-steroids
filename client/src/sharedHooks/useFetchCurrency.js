import { useMemo } from 'react'
import { useQuery } from 'graphql-hooks'

import { getKeys } from 'utils/helpers'

const QUERY = `query {
  currency(base: "RUB") {
    base
    rates {
      EUR
      RUB
      USD
    }
  }
}`

const useFetchCurrency = () => {
  const { data } = useQuery(QUERY)

  return useMemo(() => {
    const { base, rates } =  data?.currency || {}

    return {
      baseCode: base,
      codes: getKeys(rates),
      getCodeRate: code => (code && rates) ? rates[code] : 1
    }
  }, [data])
}

export default useFetchCurrency