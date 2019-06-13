import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'

import { Title } from 'components'

import styles, { titleStyles } from './styles'
import Tab from './Tab'

const CurrencyTabs = ({ codes, activeCode, handleChangeTab }) => {
  const tabsView = useMemo(() => (
    codes.map(code => (
      <Tab
        key={code}
        isActive={activeCode === code}
        onClick={handleChangeTab}
      >
      {code}
    </Tab>
    ))
  ), [activeCode, codes, handleChangeTab])

  return (
    <div className="currency-tabs">
      <Title className={titleStyles.className}>Валюта</Title>
      <div className="tabs">
        {tabsView}
      </div>
      
      {titleStyles.styles}
      <style jsx>{styles}</style>
    </div>
  )
}

CurrencyTabs.propTypes = {
  activeCode: PropTypes.string,
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeTab: PropTypes.func.isRequired
}

export default memo(CurrencyTabs)
