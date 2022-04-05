// number shortener
import shortNum from 'number-shortener';

// styled
import styled from "styled-components";
import * as palette from "../../../styled/ThemeVariables.js";


export const Market = ({market}) => {


  return (
    <StyledMarket>
        <div className="market-container">
            <h3>{market.symbol}</h3>
            {
                Number(market.price) > 10 ? (
                    <h3>${Number(market.price).toFixed(2)}</h3>
                ):(
                    <h3>${market.price}</h3>
                )
            }
            <h3><span>Volume:</span> ${shortNum(Number(market.volume_24h).toFixed(0))}</h3>
        </div>
        {
            market.exchanges.map((exchange, index) => {
                return (
                <div className="exchange-container" key={index}>
                    <h4>{exchange.name}</h4>
                    {
                    Number(exchange.price) > 10 ? (
                        <h4>${Number(exchange.price).toFixed(2)}</h4>
                    ):(
                        <h4>${exchange.price}</h4>
                    )
                    }
                    <h4><span>Volume:</span>${shortNum(Number(exchange.volume_24h).toFixed(0))}</h4>
                </div>
                )
            })
        }
    </StyledMarket>
  )
}


const StyledMarket = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 50px;
    .market-container {
        display: grid;
        margin: 20px 0;
        max-width: 600px;
        grid-template-columns: 100px 1fr 1fr;
        border-bottom: 1px solid ${palette.subtitleColor};
        @media (max-width: 950px){
            grid-template-columns: 50px 1fr 1fr;
        }
        h3 {
            font-size: ${palette.subtitleSize};
            color: white;
            @media (max-width: 950px){
                font-size: 14px;
            }
        }
        h3 span {
            color: ${palette.subtitleColor}
        }
    }
    .exchange-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        max-width: 500px;
        h4 {
            color: ${palette.subtitleColor};
            font-size: 16px;
            @media (max-width: 450px){
                font-size: 12px;
            }
        }
    }

`;