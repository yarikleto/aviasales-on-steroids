import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { Container, Header, Content } from 'components'

import styles from './styles'

const Default = props => {
  const { children } = props
  return (
    <div className="layout">
      <Header />
      <Container>
        <Content>
          {children}
        </Content>
      </Container>

      <style jsx>{styles}</style>
    </div>
  )
}

Default.propTypes = {
  children: PropTypes.node.isRequired
}

export default memo(Default)
