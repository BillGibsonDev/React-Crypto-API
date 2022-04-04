import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from "styled-components";
import * as palette from '../../styled/ThemeVariables.js';

// redux
import { connect } from 'react-redux';

// components
import { Coin } from './components/Coin.js';
import { Guide } from './components/Guide.js';
import { PageController } from './components/PageController.js';
import { Placeholder } from './components/Placeholder.js';

export const Coins = () => {

  const [ coinlist, setCoinlist ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ input, setInput ] = useState("rank_asc");
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const handleCoinList = () => {
      axios.get(`https://coinlib.io/api/v1/coinlist?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD&page=${page}&order=${input}`)
      .then(function(response){
        setCoinlist(response.data.coins);
        setLoading(false);
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleCoinList();
  }, [page, input])

  return (
    <StyledPage>
      <h1>Coins</h1>
      {
        loading === true ? (
          <Placeholder />
        ): (
          <>
            <table>
              <tbody>
                  <Guide
                    setInput={setInput}
                    input={input}
                  />
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
              </tbody>
            </table>
            <PageController
              setPage={setPage}
              page={page}
            />
          </>
        )
      }
    </StyledPage>
  )
}

const StyledPage = styled.section`
min-height: 70vh;
  h1 {
    color: ${palette.accentColor};
    font-size: ${palette.titleSize};
    width: 100%;
    text-align: center;
    margin: 50px auto 30px auto;
    @media (max-width: 760px){
      margin: 20px auto;
      font-size: 30px;
    }
  }
  table {
    border: 1px solid ${palette.subtitleColor};
    display: block;
    @media (max-width: 1060px){
      overflow-x: scroll;
      scrollbar-width: thin;
      scrollbar-color: #4e4e4e #fff; 
      }
    }

  table tr:nth-child(even){background-color: #222121;}
`;


const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Coins)