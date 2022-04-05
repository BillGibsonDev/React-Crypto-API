// number shortener
import shortNum from 'number-shortener';

// styled
import styled from "styled-components";
import * as palette from '../../../styled/ThemeVariables.js';

// router
import { Link } from "react-router-dom";

export const Coin = ({symbol, rank, name, price, volume, marketCap}) => {
  
  return (
    <StyledCoin>
      <td id="symbol"><Link to={`/coins/${symbol}`} id="title">{symbol}</Link></td>
      <td><Link to={`/coins/${symbol}`} id="title">{name}</Link></td>
      <td id="rank">{rank}</td>
      <td><span>$</span>
        {
          Number(price) > 10 ? (
            <h3>${Number(price).toFixed(2)}</h3>
          ):(
            <h3>${price}</h3>
          )
        }
      </td>
      <td>${shortNum(Number(volume).toFixed(0))}</td>
      <td><span>$</span>{shortNum(Number(marketCap).toFixed(0))}</td>
    </StyledCoin>
  )
}

const StyledCoin = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1em;
  height: 40px;
  align-items: center;
  width: 100%;
  text-align: center;
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-right: 1px solid ${palette.subtitleColor};
    color: ${palette.subtitleColor};
    font-size: 12px;
    min-width: 150px;
    @media (max-width: 1060px){
      min-width: 120px;
      color: ${palette.titleColor};
      font-size: 10px;
    }
    span {
      color: ${palette.accentColor};
    }
  }
  #title {
    color: ${palette.titleColor};
    font-size: 14px;
    &:hover {
      border-bottom: 1px solid #fff;
    }
    @media (max-width: 1060px){
      font-size: 12px;
    }
  }
`;
