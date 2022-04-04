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
flex-direction: column;
  .placeholder {
    width: 100%;
    height: 200px;
    background: #252525c5;
    margin: 20px auto;
    border-radius: 6px;
  }
`;