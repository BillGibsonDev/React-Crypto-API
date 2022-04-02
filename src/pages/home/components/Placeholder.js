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
  .placeholder {
    width: 100px;
    height: 74px;
    background: #272727c5;
    margin-right: 30px;
    border-radius: 6px;
  }
`;