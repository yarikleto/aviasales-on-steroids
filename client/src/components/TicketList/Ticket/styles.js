import css from 'styled-jsx/css'
import color from 'color'

import { common, secondary } from 'theme/colors'
import airplaneIcon from 'static/icons/airplane.svg'

export default css`
  .ticket {
    display: flex;
    width: 100%;
    list-style: none;
    background-color: ${common.light};
    box-shadow: 0 1px 4px 0 #5b89a440;
    border-radius: 5px;
    transition: all .2s;
  }

  .ticket:hover {
    box-shadow: 0 5px 25px 0 #5b89a419;
  }

  .side-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    padding: 25px 20px;
    border-right: 1px solid ${color(common.neutral).lighten(0.1)};
  }

  .carrier-logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .carrier-logo img {
    width: 100%;
  }

  .buy-button {
    width: 160px;
    height: 56px;
    border-radius: 5px;
    box-shadow: 0 2px 1px 0 #00000019, 0 1px 0 0 ${color(secondary.dark).darken(0.1)};
    background-color: ${secondary.dark};
    transition: all .2s;
    color: ${common.light};
  }

  .buy-button:hover {
    box-shadow: 0 1px 5px 0 #00000040, 0 1px 0 0 ${color(secondary.dark).lighten(0.1)};
    background-color: ${secondary.light};
  }

  .buy-button:active {
    box-shadow: inset 0 2px 0 ${color(secondary.dark).darken(0.2)}, inset 0 1px 5px rgba(0,0,0,.25);
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    width: 65%;
    position: relative;
    padding: 25px;
  }

  .stops {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 67px;
    height: 13px;
    text-transform: uppercase;
    font-size: 0.83rem;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: ${color(common.neutral).darken(0.25)};
  }

  .stops::after, .stops::before {
    content: '';
    position: absolute;
    transform: translateX(50%);
  }

  .stops::after {
    top: 140%;
    right: 60%;
    width: 96px;
    height: 1px;
    background-color: ${common.neutral};
  }

  .stops::before {
    top: 95%;
    right: -24%;
    width: 13px;
    height: 13px;
    background-image: url(${airplaneIcon});
  }

  .time {
    font-size: 2.67rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.81;
    letter-spacing: normal;
    color: ${common.dark};
    margin-bottom: 10px;
  }

  .airport {
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${common.dark};
  }

  .date {
    color: ${color(common.neutral).darken(0.25)};
  }

  .arrival .time, .arrival .airport, .arrival .date {
    text-align: right;
  }

  @media screen and (max-width: 820px) {
    .ticket {
      flex-direction: column;
    }
    .side-content, .main-content {
      width: 100%;
    }
  }

  @media screen and (max-width: 610px) {
    .stops::before {
      right: -9%;
    }
    .stops::after {
      width: 76px;
    }
  }
`