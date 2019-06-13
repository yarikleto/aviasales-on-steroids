import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Tab = props => {
  const {
    children: tabCode,
    isActive,
    onClick
  } = props

  const handleClick = useCallback(
    () => onClick(tabCode),
    [tabCode, onClick]
  )

  return (
    <div
      className={isActive && 'active'}
      onClick={handleClick}
    >
      {tabCode}

      <style jsx>{styles}</style>
    </div>
  )
}

Tab.propTypes = {
  children: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Tab