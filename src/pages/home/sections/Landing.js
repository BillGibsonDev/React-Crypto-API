// styled
import styled from "styled-components"
import * as palette from '../../../styled/ThemeVariables.js';

// router
import { Link } from "react-router-dom";

// components
import { LandingStats } from "../components/LandingStats";

// images
import Dot from '../../../images/dotWhite.png';
import Image1 from '../../../images/image1.jpg';
import Image2 from '../../../images/image2.jpg';

export const Landing = () => {

  return (
    <StyledLanding>
      <div className="wrapper">
        <div className="title-container">
          <h1>INVEST WITH COINFIDENCE</h1>
          <h1>SEARCH<span><img src={Dot} alt="" /></span>SHARE<span><img src={Dot} alt="" /></span>EARN</h1>
          <p>Search and find research your next coin venture. Lookup the exact coin you are seeking, find an exchange and see recent news all in one place.</p>
          <Link to="/search">Search</Link>
        </div>
        <div className="image-container">
          <img id="top" src={Image2} alt="" />
          <img id="bottom" src={Image1} alt="" />
        </div>
      </div>
      <LandingStats />
    </StyledLanding>
  )
}

const StyledLanding = styled.section`
min-height: 70vh;
margin: 20px 0;
  @media (max-width: 950px){
    min-height: 60vh;
  }
  .wrapper {
    display: flex;
    .title-container {
      width: 80%;
      z-index: 2;
      @media (max-width: 950px){
        width: 100%;
      }
      h1 {
        display: flex;
        align-items: center;
        font-size: ${palette.titleSize};
        color: ${palette.titleColor};
        margin-bottom: 10px;
        @media (max-width: 1200px){
          font-size: 40px;
        }
        @media (max-width: 1000px){
          font-size: 30px;
        }
        @media (max-width: 450px){
          font-size: 20px;
        }
        span img {
          display: flex;
          align-items: center;
          width: 20px;
          margin: 0 20px;
          @media (max-width: 450px){
            width: 10px;
            margin: 0 8px;
          }
        }
      }
      p {
        font-size: ${palette.paraSize};
        color: ${palette.subtitleColor};
        margin-bottom: 30px;
        max-width: 70%;
        @media (max-width: 450px){
          font-size: 10px;
          max-width: 50%;
        }
      }
      a {
        background: ${palette.accentColor};
        width: 200px;
        height: 40px;
        color: #ffffff;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${palette.subtitleSize};
        padding: 2.5px 6px;
        border: none;
        @media (max-width: 450px){
          width: 150px;
          font-size: 16px;
          margin-top: 60px;
        }
        &:hover{
          color: #000000;
          cursor: pointer;
          background: #ffffff;
          transition: 0.2s;
          transform: scale(1.01);
        }
      }
    }
    .image-container {
      display: flex;
      width: 400px;
      flex-direction: column;
      position: relative;
      height: 350px;
      z-index: 1;
      @media (max-width: 766px){
        width: 250px;
        height: 300px;
        position: absolute;
        right: 0;
      }
      @media (max-width: 450px){
        width: 40%;
        height: 300px;
        position: absolute;
        right: 0;
      }
      img {
        width: 200px;
        height: 200px;
        border-radius: 20%;
        opacity: .9;
        object-fit: cover;
        @media (max-width: 800px){
          width: 150px;
          height: 150px;
        }
        @media (max-width: 450px){
          width: 100px;
          height: 100px;
        }
      }
      #top {
        position: absolute;
        right: 0;
        @media (max-width: 450px){
          top: 30%;
          right: 10%;
        }
      }
      #bottom {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;