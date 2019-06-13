import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Checkbox = ({ isChecked, labelContent, onChange }) => {
  const handleChange = useCallback(event => {
    onChange(event.target.checked)
  }, [onChange])

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <div className="checkbox" />
      {labelContent}

      <style jsx>{styles}</style>
    </label>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked:PropTypes.bool.isRequired,
  labelContent: PropTypes.string.isRequired,
}

export default memo(Checkbox)
