import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'

import { Checkbox } from 'components'

import styles from './styles'

const StopItem = ({ value, content, isActive, onToggle, onToggleOnly }) => {
  const handleCheckboxToggle = useCallback(checked => {
    onToggle({ value, checked })
  }, [onToggle, value])

  const handleCheckboxToggleOnly = useCallback(() => {
    onToggleOnly(value)
  }, [onToggleOnly, value])

  return (
    <div className="stop-item">
      <Checkbox
        isChecked={isActive}
        labelContent={content}
        onChange={handleCheckboxToggle}
      />
      {onToggleOnly && <a onClick={handleCheckboxToggleOnly}>Только</a>}

      <style jsx>{styles}</style>
    </div>
  )
}

StopItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.number]).isRequired,
  isActive: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  onToggleOnly: PropTypes.func
}

export default memo(StopItem)
