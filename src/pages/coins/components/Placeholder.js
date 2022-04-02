// styled
import styled from "styled-components"

export const Placeholder = () => {
  return (
    <StyledPlaceholder>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
        <div className="placeholder"></div>
    </StyledPlaceholder>
  )
}

const StyledPlaceholder = styled.section`
display: flex;
min-height: 70vh;
  .placeholder {
    width: 70%;
    height: 100px;
    background: #272727c5;
    margin: auto;
    border-radius: 6px;
  }
`;