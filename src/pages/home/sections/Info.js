// styled
import styled from "styled-components"
import * as palette from '../../../styled/ThemeVariables.js';

// images
import Dot from '../../../images/dotWhite.png';
import Search from '../../../images/icons/search0516F8.png';
import Share from '../../../images/icons/share0516F8.png';
import Earn from '../../../images/icons/coins0516F8.png';

export const Info = () => {

  return (
    <StyledInfo>
        <h1>SEARCH<span><img src={Dot} alt="" /></span>SHARE<span><img src={Dot} alt="" /></span>EARN</h1>
        <div className="article-wrapper">
            <article>
                <img src={Search} alt="" />
                <h2>SEARCH</h2>
                <p>Search thousands of cryptocurrencies across thousands of markets.</p>   
            </article>
            <article>
                <img src={Share} alt="" />
                <h2>SHARE</h2>
                <p>Share cryptocurrencies with friends, neighbors and coworkers.</p>   
            </article>
            <article>
                <img src={Earn} alt="" />
                <h2>EARN</h2>
                <p>Stay ahead of the game. Know when to buy and sell to maximize profits.</p>   
            </article>
        </div>
    </StyledInfo>
  )
}

const StyledInfo = styled.section`
min-height: 70vh;
margin-top: 10%;
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${palette.titleSize};
        color: ${palette.titleColor};
        width: 100%;
        margin-bottom: 50px;
        @media (max-width: 450px){
            font-size: 20px;
        }
        span img {
            display: flex;
            align-items: center;
            width: 20px;
            margin: 0 20px;
        }
    }
    .article-wrapper {
        display: flex;
        @media (max-width: 1000px){
            flex-direction: column;
        }
        article {
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;
            width: 32%;
            height: 300px;
            margin: auto;
            background: #1a1919;
            border-radius: 8px;
            @media (max-width: 1000px){
                width: 90%;
                margin-bottom: 20px;
            }
            img {
                width: 35px;
                margin-bottom: 10px;
            }
            h2 {
                font-size: ${palette.subtitleSize};
                color: ${palette.titleColor};
            }
            p {
                width: 90%;
                margin: 6px 0;
                font-size: 18px;
                color: ${palette.subtitleColor};
            }
        }
    }
`;