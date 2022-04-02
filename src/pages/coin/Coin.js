import { useState, useEffect } from "react";
import axios from "axios";

// styled
import styled from "styled-components";
import * as palette from "../../styled/ThemeVariables.js";

// router
import { useParams } from 'react-router-dom';

export const Coin = () => {

    const { symbol } = useParams();

    const [ coin, setCoin ] = useState();

    useEffect(() => {
        const handleCoin = () =>{
            axios.get(`https://coinlib.io/api/v1/coin?key=${process.env.REACT_APP_COINLIB_KEY}&pref=USD&symbol=${symbol}`)
            .then(function(response){
            console.log(response.data)
            setCoin(response.data)
            })
            .catch(function(error){
            console.log(error)
            })
        }
        handleCoin()
    }, [symbol])
    
  return (
    <StyledCoin>
        <h1>{coin.symbol}</h1>
    </StyledCoin>
  )
}


const StyledCoin = styled.div``;