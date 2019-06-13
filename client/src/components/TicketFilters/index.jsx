import React, { useState, useCallback, useLayoutEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import { CurrencyTabs, Stops } from 'components'

import styles from './styles'

const SMALL_WIDTH = 610
const DEBOUNCE_TIMEOUT = 100
const MODAL_ROOT = document.getElementById('modal')

const TicketFilters = ({ state, actions, codes }) => {
  const [isSmallDevice, setDeviceStatus] = useState(false)
  const [isModalOpen, setModalState] = useState(false)

  const openModalMenu = useCallback(() => setModalState(true), [])
  const closeModalMenu = useCallback(() => setModalState(false), [])
  const handleClickOnFilters = useCallback(e => e.stopPropagation(), [])

  const handleResize = useCallback(debounce(() => {
    if (window.innerWidth <= SMALL_WIDTH) {
      return setDeviceStatus(true)
    }

    setDeviceStatus(false)
    setModalState(false)
  }, DEBOUNCE_TIMEOUT), [])

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  const smallDeviceView = useMemo(() => (
    <div className="modal-container" onClick={closeModalMenu}>
      <div className="ticket-filters" onClick={handleClickOnFilters}>
        <div className="close-icon" onClick={closeModalMenu} />
        <CurrencyTabs
          activeCode={state.activeCurrencyCode}
          codes={codes}
          handleChangeTab={actions.setCurrencyCode}
        />
        <Stops
          stops={state.stops}
          activeStops={state.activeStops}
          onToggle={actions.toggleStops}
          onToggleOnly={actions.toggleStopsOnly}
        />
      </div>

      <style jsx>{styles}</style>
      <style jsx global>{`
        body { overflow: hidden; }
      `}</style>
    </div>
  ), [state, codes, actions, closeModalMenu, handleClickOnFilters])


  if (isSmallDevice && isModalOpen) {
    return createPortal(smallDeviceView, MODAL_ROOT)
  }

  if (isSmallDevice) {
    return createPortal((
      <button
        className="open-filters-btn"
        onClick={openModalMenu}
      >
        Фильтры
        <style jsx>{styles}</style>
      </button>
    ), MODAL_ROOT)
  }


  return (
    <div className="ticket-filters">
      <CurrencyTabs
        activeCode={state.activeCurrencyCode}
        codes={codes}
        handleChangeTab={actions.setCurrencyCode}
      />
      <Stops
        stops={state.stops}
        activeStops={state.activeStops}
        onToggle={actions.toggleStops}
        onToggleOnly={actions.toggleStopsOnly}
      />
      <style jsx>{styles}</style>
    </div>
  )
}

TicketFilters.propTypes = {
  state: PropTypes.shape({
    activeCurrencyCode: PropTypes.string,
    stops: PropTypes.array.isRequired,
    activeStops: PropTypes.array.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    setCurrencyCode: PropTypes.func.isRequired,
    toggleStops: PropTypes.func.isRequired,
    toggleStopsOnly: PropTypes.func.isRequired,
  }).isRequired,
  codes: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TicketFilters
