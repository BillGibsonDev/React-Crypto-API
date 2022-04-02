// styled
import styled from "styled-components";
import * as palette from "../styled/ThemeVariables";

// images
import Linkedin from '../images/icons/linkedin0516F8.png';
import Github from '../images/icons/github0516F8.png';
import Twitter from '../images/icons/twitter0516F8.png';
import Instagram from '../images/icons/insta0516F8.png';

export const Footer = () => {
  return (
    <StyledFooter>
        <div className="icon-container">
            <a href="https://www.linkedin.com/in/bill-gibson-868182104/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="" /></a>
            <a href="https://github.com/GibbyCodes" target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
            <a href="http://twitter.com/gibbycodes" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="" /></a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="" /></a>
        </div>
        <h1>© Copyright, Crypto<span>Cache</span> 2022</h1>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin: auto;
min-height: 20vh;
padding: 0 5%;
background: #1a1919;
    h1 {
        color: ${palette.titleColor};
        font-size: ${palette.subtitleSize};
        span {
            color: ${palette.accentColor};
        }
    }
    .icon-container {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
    }
`;