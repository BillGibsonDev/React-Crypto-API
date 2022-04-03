// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';

// images
import Icon from '../images/icons/browserIcon.png';
import Hamburger from '../images/icons/menu0516F8.png';

// router
import { Link } from "react-router-dom";

export const Nav = () => {

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }
  return (
    <StyledNav>
        <div className="logo-container">
            <img src={Icon} alt="" />
            <h1>Crypto<span>Cache</span></h1>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="/coins">Coins</Link>
            <Link to="/search">Search</Link>
        </div>
        <div id="myNav" className="overlay">
            <button onClick={closeNav}>&times;</button>
            <div className="overlayContent" onClick={closeNav}>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/coins">Coins</Link>
                <Link to="/search">Search</Link>
            </div>
        </div>
        <img id='hamburger' src={Hamburger} onClick={openNav} alt="hamburger menu"/>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
min-height: 8vh;
    .logo-container {
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }
        h1 {
            font-size: ${palette.subtitleSize};
            color: ${palette.titleColor};
            span {
                color: ${palette.accentColor};
            }
        }
    }
    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 400px;
        @media (max-width: 1050px){
            display: none;
        }
        a {
            font-size: ${palette.subtitleSize};
            color: ${palette.titleColor};
            font-weight: 600;
            &:hover {
                border-bottom: 1px solid ${palette.accentColor};
            }
        }
    }
    .overlay {
            height: 100%;
            width: 0;
            position: fixed; 
            left: 0;
            top: 0;
            background-color: rgb(0,0,0); 
            overflow-x: hidden; 
            transition: 0.5s;
            z-index: 99; 
                button {
                    position: absolute;
                    top: 20px;
                    right: 45px;
                    font-size: 60px;
                    color: #818181;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    &:hover, &:focus {
                        transition: 0.3s;
                        transform: scale(1.1);
                    }
                }
                .overlayContent {
                    position: relative;
                    top: 10%; 
                    width: 50%;
                    margin: auto;
                    margin-top: 30px;
                    z-index: 99;
                    a {
                        display: flex;
                        justify-content: center;
                        font-size: 2em;
                        color: white;
                        margin: 20px;
                        transition: 0.3s;
                        font-size: 3em; 
                            &:hover, &:focus {
                            color: #f1f1f1;
                            transition: 0.3s;
                            transform: scale(1.1);
                        }
                    }
                } 
            }
            #hamburger {
                cursor: pointer;
                display: none;
                width: 40px;
                height: 30px;
                &:hover, &:focus {
                    transition: 0.3s;
                    transform: rotateZ(20deg);
                }
                @media (max-width: 1050px){
                    display: block;
                }
                @media (max-width: 750px){
                    width: 30px;
                }
            }
`;