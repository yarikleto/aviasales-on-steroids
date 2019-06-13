import css from 'styled-jsx/css'
import color from 'color'

import { common, primary } from 'theme/colors'
import controlsIcon from 'static/icons/controls.svg'
import cancelIcon from 'static/icons/cancel.svg'

export default css`
  @keyframes opacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes scale {
    from {
      transform: translateX(-50%) scale(1);
    }

    40% {
      transform: translateX(-50%) scale(1.1);
    }

    70% {
      transform: translateX(-50%) scale(0.9);
    }

    to {
      transform: translateX(-50%) scale(1);
    }
  }

  .modal-container {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
    animation: .3s opacity;
  }

  .ticket-filters {
    position: sticky;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: min-content;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(91,137,164,0.25);
    border-radius: 5px;
    padding: 15px 0;
  }

  .modal-container .ticket-filters {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
    bottom: 3%;
    animation: .3s scale;
  }

  .close-icon {
    position: absolute;
    top: 3px;
    right: 0;
    width: 36px;
    height: 36px;
    background: url(${cancelIcon}) no-repeat center;
    background-size: 15px;
    cursor: pointer;
  }

  .open-filters-btn {
    position: fixed;
    width: 140px;
    height: 40px;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    background: ${primary.dark} url(${controlsIcon}) no-repeat 15px center;
    background-size: 20px;
    border: 1px solid ${color(primary.dark).darken(0.2)};
    color: ${common.light};
    border-radius: 50px;
    padding: 0 15px 0 35px;
    transition: all .2s;
  }

  .open-filters-btn:hover {
    box-shadow: 0 1px 5px 0 #00000040, 0 1px 0 0 ${primary.dark};
    background-color: ${color(primary.dark).lighten(0.1)};
  }

  .open-filters-btn:active {
    box-shadow: inset 0 2px 0 ${color(primary.dark).darken(0.2)}, inset 0 1px 5px rgba(0,0,0,.15);
  }
`