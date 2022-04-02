import { useState, useEffect } from "react";

// styled
import styled from "styled-components";
import * as palette from '../../../styled/ThemeVariables.js';

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
  }, [volume, marketCap])
  
  return (
    <StyledCoin>
      <h2>{symbol}</h2>
      <h2>{name}</h2>
      <h3>{rank}</h3>
      <h3>${price}</h3>
      <h3>{newVolume}</h3>
      <h3>${newMarketCap}</h3>
    </StyledCoin>
  )
}

const StyledCoin = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1em;
  border: 1px solid ${palette.subtitleColor};
  height: 80px;
  align-items: center;
  padding: 0 2%;
  width: 100%;
  text-align: center;
  h2 {
    color: ${palette.titleColor};
    font-size: ${palette.paraSize};
  }
  h3 {
    color: ${palette.subtitleColor};
    font-size: 14px;
  }
`;
