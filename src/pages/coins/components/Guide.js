// styled
import styled from "styled-components"
import * as palette from '../../../styled/ThemeVariables.js';

// images
import Triangle from '../../../images/icons/triangle0516F8.png';

export const Guide = ({setInput, input}) => {
  return (
    <StyledGuide>
        <h2>Symbol</h2>
        <h2>Name</h2>
        <h2 
          id="sort"
          onClick={() => {
            input === "rank_asc" ? (
              setInput("rank_desc")
            ): (
              setInput("rank_asc")
            )}
          }>Rank
          <span> 
            { 
              input === "rank_asc" ? (
                <img src={Triangle} alt="" />
              ): input === "rank_desc" ? (
                <img id="down" src={Triangle} alt="" />
              ):(
                <></>
              )
            }
          </span>
        </h2>
        <h2 
          id="sort"
          onClick={() => {
            input === "price_asc" ? (
              setInput("price_desc")
            ): (
              setInput("price_asc")
            )}
          }>Price
          <span> 
            { 
              input === "price_asc" ? (
                <img src={Triangle} alt="" />
              ): input === "price_desc" ? (
                <img id="down" src={Triangle} alt="" />
              ): (
                <></>
              )
            }
          </span>
        </h2>
        <h2 
          id="sort"
          onClick={() => {
            input === "volume_asc" ? (
              setInput("volume_desc")
            ): (
              setInput("volume_asc")
            )
            }
          }>Volume
          <span> 
            { 
              input === "volume_asc" ? (
                <img src={Triangle} alt="" />
              ): input === "volume_desc" ? (
                <img id="down" src={Triangle} alt="" />
              ):(
                <></>
            )}
          </span>
        </h2>
        <h2>Market Cap</h2>
    </StyledGuide>
  )
}

const StyledGuide = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1em;
    height: 80px;
    align-items: center;
    padding: 0 1%;
    width: 100%;
    text-align: center;
    h2 {
      color: ${palette.titleColor};
      font-size: ${palette.paraSize};
      display: flex;
      align-items: center;
      justify-content: center;
      span img {
        display: flex;
        width: 15px;
        margin-left: 6px;
      }
      #down {
        transform: rotate(180deg);
      }
    }
    #sort {
        cursor: pointer;
    }
`;
