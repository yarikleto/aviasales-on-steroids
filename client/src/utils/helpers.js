import { format as formatDate } from 'date-fns'
import enDateLocale from 'date-fns/locale/en-US'

import { DATE_PATTERN } from 'constants/common'

export const getKeys = obj => obj ? Object.keys(obj) : []

export const formatMoneyByCode = (money, code) => {
  const options = code ? { style: 'currency', currency: code, minimumFractionDigits: 0 }: {}

  return money.toLocaleString('en', options)
}

export const getUniqueValues = arr => [... new Set(arr)]

export const isArray = item => item instanceof Array

/**
 *
 *@example
 * const getNumberNounWithMessages = getNumberNoun({
 *  multipleZero: 'No tickets',
 *  multipleOne: 'ticket',
 *  multipleTwo: 'tickets',
 *  multipleFive: 'tickets'
 * })
 * getNumberNounWithMessages(0) -> 'No tickets'
 * getNumberNounWithMessages(1) -> '1 ticket'
 * getNumberNounWithMessages(22) -> '22 tickets'
 * getNumberNounWithMessages(45) -> '45 tickets'
 */
export const getNumberNoun = messages => number => {
  const {
    multipleZero, multipleOne, multipleTwo, multipleFive
  } = messages

  let remainder = Math.abs(number);
  remainder %= 100;
  if (remainder >= 5 && remainder <= 20) return number + ' ' + multipleFive
  remainder %= 10;
  if (remainder === 0) return multipleZero
  if (remainder == 1) return number + ' ' + multipleOne
  if (remainder >= 2 && remainder <= 4) return number + ' ' + multipleTwo
  return number + ' ' + multipleFive
}

export const createTicketId = ticketInfo => {
  const { arrival_date, arrival_time, departure_date, departure_time } = ticketInfo

  return arrival_date + arrival_time + departure_date + departure_time
}

export const getFortammedDate = date => {
  return formatDate(new Date(date), DATE_PATTERN, { locale: enDateLocale })
}
