import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Title } from 'components'
import { getNumberNoun } from 'utils/helpers'

import styles, { titleStyles } from './styles'
import StopItem from './StopItem'

const getNumberNounWithMessages = getNumberNoun({
  multipleZero: 'Без пересадок',
  multipleOne: 'пересадка',
  multipleTwo: 'пересадки',
  multipleFive: 'пересадок'
})

const Stops = ({ activeStops, stops, onToggle, onToggleOnly }) => {
  const stopsItemsView = useMemo(() => stops.map(
    amount => (
      <StopItem
        isActive={activeStops.includes(amount)}
        key={amount}
        value={amount}
        content={getNumberNounWithMessages(amount)}
        onToggle={onToggle}
        onToggleOnly={onToggleOnly}
      />
    )
  ), [activeStops, stops, onToggle, onToggleOnly])

  return (
    <div className="stops">
      <Title className={titleStyles.className}>
        Количество пересадок
      </Title>
      <StopItem
        isActive={activeStops.length === stops.length}
        content='Все'
        value={stops}
        onToggle={onToggle}
      />
      {stopsItemsView}

      {titleStyles.styles}
      <style jsx>{styles}</style>
    </div>
  )
}

Stops.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onToggleOnly: PropTypes.func.isRequired,
  activeStops: PropTypes.arrayOf(PropTypes.number).isRequired,
  stops: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default memo(Stops)
