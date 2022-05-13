// styled
import styled from "styled-components";
import * as palette from "../../../styled/ThemeVariables.js";

// components
import { Stats } from '../../coin/components/Stats.js';
import { Market } from '../../coin/components/Markets.js';

export const Coin = ({coin}) => {

  return (
    <StyledCoin>
      <div className="title-container">
        <h2>{coin.symbol} - </h2>
        <h2>{coin.name}</h2>
        <h3 id="rank">Rank: {coin.rank}</h3>
      </div>
      {
        Number(coin.price) > 10 
        ? <h2>${Number(coin.price).toFixed(2)}</h2>
        : <h2>${coin.price}</h2>
      }
      <Stats
        coin={coin}
      />
      <h3 id="markets">Markets</h3>
      {
        coin.markets.map((market, index) => {
          return (
            <Market
              key={index}
              market={market}
            />
          )
        })
      }
    </StyledCoin>
  )
}


const StyledCoin = styled.div`
min-height: 60vh;
  .title-container {
    display: flex;
    align-items: center;
    h2 {
      color: ${palette.titleColor};
      font-size: ${palette.subtitleSize};
      margin-right: 10px;
    }
    h3 {
      color: ${palette.subtitleColor};
      margin-left: 50px;
    }
  }
  h2 {
    color: ${palette.titleColor};
    font-size: ${palette.subtitleSize};
    margin-right: 10px;
  }
  h3 {
    color: ${palette.titleColor};
    margin: 6px 0;
    span {
      color: ${palette.subtitleColor};
    }
  }
  #markets {
    font-size: ${palette.subtitleSize};
    color: ${palette.titleColor};
    margin-top: 50px;
  }

`;