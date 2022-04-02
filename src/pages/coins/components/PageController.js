// styled
import styled from "styled-components"
import { subtitleSize, titleColor } from "../../../styled/ThemeVariables.js";
import * as palette from '../../../styled/ThemeVariables.js';

export const PageController = ({ setPage, page }) => {
  return (
    <StyledController>
        {
            page > 1 ? (
                <button onClick={() => setPage(page - 1)}>Prev</button>
            ): (
                <button id="gray">Prev</button>
            )
        }
        <h4>{page}</h4>
        <button onClick={() => setPage(page + 1)}>Next</button>
    </StyledController>
  )
}

const StyledController = styled.section`
 display: flex;
 justify-content: center;
 width: 100%;
 margin: 10px auto 50px auto;
    h4 {
        font-size: ${subtitleSize};
        color: ${titleColor};
        margin: 0 10px;
    }
    button {
        background: ${palette.accentColor};
        width: 100px;
        height: 40px;
        color: #ffffff;
        border-radius: 4px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${palette.subtitleSize};
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
    #gray {
        background: ${palette.subtitleColor};
        color: #000000;
        &:hover{
            color: #000000;
            cursor: auto;
            background: ${palette.subtitleColor};
            transform: scale(1);
        }
    }

`;
