import { useState } from 'react';
import axios from 'axios';

// styled
import styled from "styled-components"

// images
import SearchIcon from '../../images/icons/search0516F8.png';

// redux
import { connect } from 'react-redux'
import { subtitleSize } from '../../styled/ThemeVariables';

export const Search = () => {

  const [ input, setInput ] = useState("BTC");
  const [ coin, setCoin ] = useState();

  const handleCoin = () =>{
    axios.get(`https://coinlib.io/api/v1/coin?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD&symbol=${input}`)
    .then(function(response){
      console.log(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      handleCoin();
    }
  };

  return (
    <StyledSearch>
      <label onClick={handleCoin} ><img src={SearchIcon} alt="" />
        <input 
          type="text" 
          placeholder={"BTC"} 
          onChange={(e) => {
            setInput(e.target.value)}
          } 
          onKeyDown={(e) => onEnter(e)}
        />
      </label>
    </StyledSearch>
  )
}

const StyledSearch = styled.section`
min-height: 60vh;
  label {
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
      font-size: ${subtitleSize};
      width: 200px;
      height: 30px;
      padding-left: 3px;
      text-transform: uppercase;
    }
  }
`;


const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Search)