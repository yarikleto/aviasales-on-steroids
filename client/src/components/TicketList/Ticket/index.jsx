import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { getNumberNoun } from 'utils/helpers'

import styles from './styles'

const CARRIER_LOGO_SIZE = {
  width: 200,
  height: 45
}

const getNumberNounWithMessages = getNumberNoun({
  multipleZero: '',
  multipleOne: 'пересадка',
  multipleTwo: 'пересадки',
  multipleFive: 'пересадок'
})

const Ticket = ({ info }) => {
  return (
    <li className="ticket">
      <div className="side-content">
        <div className="carrier-logo">
          <img
            src={`${IMG_API}/${CARRIER_LOGO_SIZE.width}/${CARRIER_LOGO_SIZE.height}/${info.carrier}.png`}
            srcSet={`
              ${IMG_API}/${CARRIER_LOGO_SIZE.width}/${CARRIER_LOGO_SIZE.height}/${info.carrier}@2x.png 2x
            `}
            alt={info.carrier}
          />
        </div>
        <button className="buy-button">
          Купить <br/>
          за {info.price}
        </button>
      </div>
      <div className="main-content">
        <div className="departure">
          <div className="time">{info.departure_time}</div>
          <div className="airport">
            {info.origin}, {info.origin_name}
          </div>
          <div className="date">
            {info.departure_date}
          </div>
        </div>
        <div className="stops">{getNumberNounWithMessages(info.stops)}</div>
        <div className="arrival">
          <div className="time">{info.arrival_time}</div>
          <div className="airport">
          {info.destination_name}, {info.destination}
          </div>
          <div className="date">
            {info.arrival_date}
          </div>
        </div> 
      </div>

      <style jsx>{styles}</style>
    </li>
  )
}

Ticket.propTypes = {
  info: PropTypes.object.isRequired
}

export default memo(Ticket)
