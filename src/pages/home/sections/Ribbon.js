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
            <Link to="/"><img src={Bitcoin} alt="" /><span>Bitcoin</span></Link>
            <Link to="/"><img src={ETH} alt="" /><span>Ethereum</span></Link>
            <Link to="/"><img src={Tether} alt="" /><span>Tether</span></Link>
            <Link to="/"><img src={USDC} alt="" /><span>USDC</span></Link>
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
h2 {
    width: 95%;
    margin: 0 auto;
    font-size: ${palette.subtitleSize};
    color: ${palette.subtitleColor};
}
.icon-container {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    a {
        display: flex;
        align-items: center;
        font-size: ${palette.titleSize};
        color: ${palette.titleColor};
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