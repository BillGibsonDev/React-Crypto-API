import { useState, useEffect } from "react";

// styled
import styled from "styled-components"
import * as palette from '../../../styled/ThemeVariables.js';

export const CoinInfo = ({symbol, name, price, markets}) => {

    const [ date, setDate ] = useState();

    useEffect(() => {
      function handleDate(){
        const current = new Date();
        const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()} @ ${current.getHours()}:${current.getMinutes()}`;
        setDate(date);
    }
    handleDate();
    }, [])

  return (
    <StyledCoin>
        <div className="title-container">
            <div className="title-wrapper">
                <h2 id="spacer">{symbol}</h2>
                <h2>{name}</h2>
            </div>
            <h3>{date}</h3>
        </div>
        <div className="price-container">
            <h2><span>$</span>{price}</h2>
            <h2>{name}</h2>
        </div>
        {
            markets.map((market, index) => {
                return(
                    <div className="market-container" key={index}>
                        <h2>{market.symbol}</h2>
                        <h2>{market.price}</h2>
                        <h2>{market.volume_24h}</h2>
                    </div>
                )
            })
        }

    </StyledCoin>
  )
}

const StyledCoin = styled.article`
min-height: 60vh;
width: 70%;
margin: auto;
.title-container {
    display: flex;
    justify-content: space-between;
    .title-wrapper {
        display: flex;
        h2 {
            color: ${palette.titleColor};
            font-size: ${palette.subtitleSize};
        }
        #spacer {
            margin-right: 10px;
        }
    }

    h3 {
        color: ${palette.subtitleColor};
        font-size: ${palette.paraSize};
    }


}
.price-container {
    h2 {
        color: ${palette.titleColor};
        font-size: ${palette.subtitleSize};
        span {
            color: ${palette.accentColor};
        }
    }
}

.market-container {
    h2 {
        color: ${palette.titleColor};
    }
}
`;
