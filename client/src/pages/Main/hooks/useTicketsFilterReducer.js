import { useReducer, useMemo, useCallback } from 'react'

import { isArray } from 'utils/helpers'

const SET_TICKETS_CURRENCY_CODE = 'SET_TICKETS_CURRENCY_CODE'
const SET_TICKETS_STOPS = 'SET_TICKETS_STOPS'
const TOGGLE_TICKETS_STOPS = 'TOGGLE_TICKETS_STOPS'
const TOGGLE_TICKETS_STOPS_ONLY = 'TOGGLE_TICKETS_STOPS_ONLY'

const initialState = {
  activeCurrencyCode: '',
  stops: [],
  activeStops: [0]
}

const setTicketsCurrencyCode = (state, payload) => {
  return {
    ...state,
    activeCurrencyCode: payload
  }
}

const setTicketsStops = (state, payload) => {
  return {
    ...state,
    stops: payload
  }
}

const toggleTicketsStops = (state, payload) => {
  const { value, checked } = payload

  let newActiveStops = [...state.activeStops]

  if (isArray(value) && checked) {
    newActiveStops = value
  }
  else if (isArray(value) && !checked) {
    newActiveStops = []
  }
  else if (checked) {
    newActiveStops.push(value)
  }
  else {
    newActiveStops = newActiveStops.filter(amount => amount !== value)
  }
  return {
    ...state,
    activeStops: newActiveStops,
  }
}

const toggleTicketsStopsOnly = (state, payload) => {
  return {
    ...state,
    activeStops: [payload]
  }
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TICKETS_CURRENCY_CODE: return setTicketsCurrencyCode(state, payload)
    case SET_TICKETS_STOPS: return setTicketsStops(state, payload)
    case TOGGLE_TICKETS_STOPS: return toggleTicketsStops(state, payload)
    case TOGGLE_TICKETS_STOPS_ONLY: return toggleTicketsStopsOnly(state, payload)
    default: return state
  }
}


const useTicketsFilterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setCurrencyCode = useCallback(payload => {
    dispatch({ type: SET_TICKETS_CURRENCY_CODE, payload })
  }, [])

  const setStops = useCallback(payload => {
    dispatch({ type: SET_TICKETS_STOPS, payload })
  }, [])

  const toggleStops = useCallback(payload => {
    dispatch({ type: TOGGLE_TICKETS_STOPS, payload })
  }, [])

  const toggleStopsOnly = useCallback(payload => {
    dispatch({ type: TOGGLE_TICKETS_STOPS_ONLY, payload })
  }, [])

  const actions = useMemo(() => ({
    setCurrencyCode,
    setStops,
    toggleStops,
    toggleStopsOnly
  }), [setCurrencyCode, setStops, toggleStops, toggleStopsOnly])

  return [state, actions]
}

export default useTicketsFilterReducer
