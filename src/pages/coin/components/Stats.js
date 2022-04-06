// styled
import styled from "styled-components";
import * as palette from "../../../styled/ThemeVariables.js";

// number shortener
import shortNum from 'number-shortener';

export const Stats = ({coin}) => {

  return (
    <StyledStats>
        <div className="change-container">
          <h3 style={{color: Number(coin.delta_1h) < 0 ? 'red' : ''}}><span>1h:</span> {Number(coin.delta_1h)}%</h3>
          <h3 style={{color: Number(coin.delta_24h) < 0 ? 'red' : ''}}><span>24hr:</span> {Number(coin.delta_24h)}%</h3>
          <h3 style={{color: Number(coin.delta_7d) < 0 ? 'red' : ''}}><span>7d:</span> {Number(coin.delta_7d)}%</h3>
          <h3 style={{color: Number(coin.delta_30d) < 0 ? 'red' : ''}}><span>30d:</span> {Number(coin.delta_30d)}%</h3>
        </div>
        <div className="stats-container">
          <h3><span>High 24hr:</span> ${Number(coin.high_24h).toFixed(2)}</h3>
          <h3><span>Volume 24hr:</span> ${shortNum(Number(coin.total_volume_24h).toFixed(0))}</h3>
          <h3><span>Market Cap:</span> ${shortNum(Number(coin.market_cap).toFixed(0))}</h3>
        </div>
    </StyledStats>
  )
}


const StyledStats = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 600px;
  h3 {
    color: ${palette.titleColor};
    margin: 6px 0;
    span {
      color: ${palette.subtitleColor};
    }
  }

`;