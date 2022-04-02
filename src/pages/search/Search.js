import { useState } from 'react';
import axios from 'axios';

// styled
import styled from "styled-components"
import * as palette from '../../styled/ThemeVariables.js';

// components
import { Searchbar } from './components/Searchbar.js';
import  { CoinInfo } from './components/CoinInfo.js';

export const Search = () => {

  const [ input, setInput ] = useState("");
  const [ coin, setCoin ] = useState();

  const handleCoin = () =>{
    axios.get(`https://coinlib.io/api/v1/coin?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD&symbol=${input}`)
    .then(function(response){
      console.log(response.data)
      setCoin(response.data)
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
      <Searchbar
        handleCoin={handleCoin}
        setInput={setInput}
        onEnter={onEnter}
      />
      {
        coin === undefined ? (
          <h1>No Coin Yet..</h1>
        ): (
          <CoinInfo
            symbol={coin.symbol}
            name={coin.name}
            price={coin.price}
            markets={coin.markets}
          />
        )
      }
    </StyledSearch>
  )
}

const StyledSearch = styled.section`
min-height: 60vh;
  h1 {
    color: ${palette.accentColor};
    font-size: ${palette.titleSize};
    width: 100%;
    text-align: center;
    margin: 50px auto 30px auto;
  }
`;