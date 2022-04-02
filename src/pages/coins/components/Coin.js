import { useState, useEffect } from "react";

// styled
import styled from "styled-components";
import * as palette from '../../../styled/ThemeVariables.js';

// router
import { Link } from "react-router-dom";

export const Coin = ({symbol, rank, name, price, volume, marketCap}) => {

  const [ newVolume, setNewVolume ] = useState();
  const [ newMarketCap, setNewMarketCap ] = useState();

  useEffect(() => {
    const handleVolume = () => {
      let v = parseInt(volume);
      let str = (v).toLocaleString("en-US");
      setNewVolume(str)
    }
    const handleMarketCap = () => {
      let m = parseInt(marketCap);
      let str = (m).toLocaleString("en-US");
      setNewMarketCap(str)
    }
    handleMarketCap();
    handleVolume();
  }, [volume, marketCap, price])
  
  return (
    <StyledCoin>
      <td id="symbol"><Link to="/" id="title">{symbol}</Link></td>
      <td><Link to="/" id="title">{name}</Link></td>
      <td id="rank">{rank}</td>
      <td><span>$</span>{price}</td>
      <td>{newVolume}</td>
      <td><span>$</span>{newMarketCap}</td>
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
