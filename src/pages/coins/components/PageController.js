// styled
import styled from "styled-components"
import { subtitleSize, titleColor } from "../../../styled/ThemeVariables.js";
import * as palette from '../../../styled/ThemeVariables.js';

export const PageController = ({ setPage, page }) => {
  return (
    <StyledController>
        {
            page > 1 ? (
                <button onClick={setPage(page - 1)}>Prev</button>
            ): (
                <></>
            )
        }
        <h4>{page}</h4>
        <button onClick={setPage(page + 1)}>Next</button>
    </StyledController>
  )
}

const StyledController = styled.section`
 display: flex;
    h4 {
        font-size: ${subtitleSize};
        color: ${titleColor};
    }
    button {
        background: ${palette.accentColor};
        width: 200px;
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

`;
