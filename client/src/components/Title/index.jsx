import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './styles'

const Title = ({ children, className }) => {
  return (
    <h6 className={className}>
      {children}

      <style jsx>{styles}</style>
    </h6>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default memo(Title)
