import { useState, useEffect } from "react";
import axios from "axios";

// styled
import styled from "styled-components"

// components
import { Placeholder } from "./Placeholder";

export const LandingStats = () => {

  const [ stats, setStats ] = useState();
  const [ volume, setVolume ] = useState(0)

  useEffect(() => {
    const handleCoinGlobal = () =>{
      axios.get(`https://coinlib.io/api/v1/global?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD`)
      .then(function(response){
        setStats(response.data);
        let n = parseInt(response.data.total_volume_24h);
        let str = (n).toLocaleString("en-US");
        setVolume(str)
      })
      .catch(function(error){
        console.log(error)
      })
    }
    handleCoinGlobal();
  }, [])


  return (
    <StyledLanding>
      {
        stats === undefined ? (
          <Placeholder />
        ): (
          <>
            <h2><span>{stats.coins} </span>Coins</h2>
            <h2><span>{stats.markets} </span> Markets</h2>
            <h2><span>${volume}</span> 24hr Volume</h2>
          </>
        )
      }
    </StyledLanding>
  )
}

const StyledLanding = styled.section`
display: flex;
margin-top: 20px;
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    color: #bdbdbd;
    margin-right: 30px;
    @media (max-width: 450px){
      font-size: 12px;
    }
    span {
      font-size: 30px;
      color: #ffffff;
      @media (max-width: 450px){
        font-size: 16px;
      }
    }
  }

`;