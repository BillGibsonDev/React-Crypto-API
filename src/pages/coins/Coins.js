import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from "styled-components"
import * as palette from '../../styled/ThemeVariables.js';

// redux
import { connect } from 'react-redux'

// components
import { Coin } from './components/Coin.js';
import { Guide } from './components/Guide.js';
import { PageController } from './components/PageController.js';

export const Coins = () => {

  const [ coinlist, setCoinlist ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ input, setInput ] = useState("rank_asc");

  useEffect(() => {
    const handleCoinList = () => {
        axios.get(`https://coinlib.io/api/v1/coinlist?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD&page=${page}&order=${input}`)
        .then(function(response){
            console.log(response.data.coins)
            setCoinlist(response.data.coins)
        })
        .catch(function(error){
            console.log(error)
        })
    }
    handleCoinList();
  }, [page, input])

  return (
    <StyledPage>
      <Guide
        setInput={setInput}
        input={input}
      />
      {
        coinlist === undefined ? (
          <></>
        ): (
          <>
            {
              coinlist.map((coin, index) =>{
                return (
                  <Coin
                    key={index}
                    symbol={coin.symbol}
                    name={coin.name}
                    volume={coin.volume_24h}
                    rank={coin.rank}
                    marketCap={coin.market_cap}
                    price={coin.price}
                  />
                )
              })
            }
          </>
        )
      }
      <PageController
        setPage={setPage}
        page={page}
      />
    </StyledPage>
  )
}

const StyledPage = styled.section`

`;


const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Coins)