import { format as formatDate } from 'date-fns'
import ruDateLocale from 'date-fns/locale/ru'

import { DATE_PATTERN } from 'constants/common'

export const getKeys = obj => obj ? Object.keys(obj) : []

export const formatMoneyByCode = (money, code) => {
  const options = code ? { style: 'currency', currency: code, minimumFractionDigits: 0 }: {}

  return money.toLocaleString('ru', options)
}

export const getUniqueValues = arr => [... new Set(arr)]

export const isArray = item => item instanceof Array

/**
 * 
 *@example
 * const getNumberNounWithMessages = getNumberNoun({
 *  multipleZero: 'Нет билетов',
 *  multipleOne: 'билет',
 *  multipleTwo: 'билета',
 *  multipleFive: 'билетов'
 * })
 * getNumberNounWithMessages(0) -> 'Нет билетов'
 * getNumberNounWithMessages(1) -> '1 билет'
 * getNumberNounWithMessages(22) -> '22 билета'
 * getNumberNounWithMessages(45) -> '45 билетов'
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
  return formatDate(new Date(date), DATE_PATTERN, { locale: ruDateLocale })
}