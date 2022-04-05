import { useState } from 'react';
import axios from 'axios';

// styled
import styled from "styled-components"
import * as palette from '../../styled/ThemeVariables.js';

// components
import { Searchbar } from './components/Searchbar.js';
import  { Coin } from './components/Coin.js';

export const Search = () => {

  const [ input, setInput ] = useState("");
  const [ coin, setCoin ] = useState();
  const [ loading, setLoading ] = useState(false)

  const handleCoin = () =>{
    setLoading(true);
    axios.get(`https://coinlib.io/api/v1/coin?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD&symbol=${input}`)
    .then(function(response){
      setCoin(response.data);
      setLoading(false);
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
        coin === undefined && loading === false ? (
          <h1>Exact Symbols Only</h1>
        ): loading === true ? (
          <h1>Searching..</h1>
        ): (
          <Coin
            coin={coin}
          />
        )
      }
    </StyledSearch>
  )
}

const StyledSearch = styled.section`
min-height: 70vh;
  h1 {
    color: ${palette.accentColor};
    font-size: ${palette.titleSize};
    width: 100%;
    text-align: center;
    margin: 50px auto 30px auto;
    @media (max-width: 450px){
      margin-top: 10px;
      font-size: 30px;
    }
  }
`;