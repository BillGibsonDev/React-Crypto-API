// styled
import styled from "styled-components";
import * as palette from '../styled/ThemeVariables.js';

// images
import Icon from '../images/icons/browserIcon.png';

// router
import { Link } from "react-router-dom";

export const Nav = () => {
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
        a {
            font-size: ${palette.subtitleSize};
            color: ${palette.titleColor};
            font-weight: 600;
            &:hover {
                border-bottom: 1px solid ${palette.accentColor};
            }
        }
    }
`;