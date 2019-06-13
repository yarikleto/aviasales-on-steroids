import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'

import { ANIMATION_DELAY } from 'constants/common'
import { createTicketId } from 'utils/helpers'

import styles from './styles'
import Ticket from './Ticket'

const PosedWrapper = posed.div({
  enter: {
    opacity: 1,
    transition: ({ animationKey }) => ({ delay: animationKey * ANIMATION_DELAY })
  },
  exit: {
    opacity: 0,
  },
  props: { animationKey: 0 }
})

const TicketList = ({ tickets }) => {
  const listItems = useMemo(
    () => tickets.map((ticketInfo, i) => (
      <PosedWrapper key={createTicketId(ticketInfo)} animationKey={i}>
        <Ticket info={ticketInfo} />
      </PosedWrapper>
    )
  ), [tickets])

  return <>
    <ul className="ticket-list">
      <PoseGroup>
        {listItems}
      </PoseGroup>
    </ul>
      
    <style jsx>{styles}</style>
  </>
}

TicketList.propTypes = {
  tickets: []
}

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object)
}

export default memo(TicketList)
