// styled
import styled from "styled-components"
import * as palette from '../../../styled/ThemeVariables.js';

// router
import { Link } from "react-router-dom";

// images
import Bitcoin from '../../../images/icons/bitcoin.png';
import ETH from '../../../images/icons/eth.png';
import USDC from '../../../images/icons/usdclogo.png';
import Tether from '../../../images/icons/tetherIcon.png';

export const Ribbon = () => {

  return (
    <StyledRibbon>
        <h2>Popular Coins</h2>
        <div className="icon-container">
            <Link to={`/coins/BTC`}><img src={Bitcoin} alt="" /><span>Bitcoin</span></Link>
            <Link to={`/coins/ETH}`}><img src={ETH} alt="" /><span>Ethereum</span></Link>
            <Link to={`/coins/USDT`}><img src={Tether} alt="" /><span>Tether</span></Link>
            <Link to={`/coins/USDC`}><img src={USDC} alt="" /><span>USDC</span></Link>
        </div>
    </StyledRibbon>
  )
}

const StyledRibbon = styled.section`
min-height: 15vh;
max-height: 20vh;
width: 100%;
background: ${palette.accentColor};
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 8px;
    @media (max-width: 450px){
        margin-bottom: 100px;
    }
    h2 {
        width: 95%;
        margin: 0 auto;
        font-size: ${palette.subtitleSize};
        color: ${palette.subtitleColor};
        @media (max-width: 450px){
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
    .icon-container {
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: 0 auto;
        @media (max-width: 750px){
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 1em;
            margin-bottom: 20px;
        }
        a {
            display: flex;
            align-items: center;
            font-size: ${palette.titleSize};
            color: ${palette.titleColor};
            @media (max-width: 1150px){
                font-size: 40px;
            }
            @media (max-width: 950px){
                font-size: 30px;
            }
            @media (max-width: 450px){
                font-size: 20px;
            }
            img {
                width: 30px;
                height: 30px;
            }
            span {
                margin-left: 6px;
            }
        }
    }
`;