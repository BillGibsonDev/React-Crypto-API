// styled
import styled from "styled-components"
import * as palette from '../../../styled/ThemeVariables.js';

// images
import SearchIcon from '../../../images/icons/search0516F8.png';

export const Searchbar = ({setInput, handleCoin, onEnter}) => {

  return (
    <StyledSearchbar>
        <img src={SearchIcon} alt="" />
        <input 
          type="text" 
          placeholder={"BTC"} 
          onChange={(e) => {
            setInput(e.target.value)}
          } 
          onKeyDown={(e) => onEnter(e)}
        />
        <button onClick={() =>{ handleCoin();}}>Search</button>
    </StyledSearchbar>
  )
}

const StyledSearchbar = styled.label`
width: 100%;
margin: 30px auto;
display: flex;
align-items: center;
justify-content: center;
    img {
      width: 25px;
      margin-right: 6px;
    }
    input {
      font-size: ${palette.subtitleSize};
      width: 200px;
      height: 30px;
      padding-left: 3px;
      text-transform: uppercase;
    }
    button {
      background: ${palette.accentColor};
      width: 100px;
      height: 30px;
      color: #ffffff;
      border-radius: 4px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${palette.paraSize};
      padding: 2.5px 6px;
      border: none;
      @media (max-width: 420px){
        width: 85px;
      }
      &:hover{
          color: #000000;
          cursor: pointer;
          background: #ffffff;
          transition: 0.2s;
          transform: scale(1.01);
      }
    }
`;
