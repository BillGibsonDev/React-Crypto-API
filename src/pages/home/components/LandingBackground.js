// styled
import styled from "styled-components"

export const LandingBackground = () => {
  return (
    <StyledBackground>
        <img src="https://wallpaperaccess.com/full/85814.jpg" alt="" />
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
opacity: .1;
height: 100vh;
width: 100%;
z-index: -1;
position: absolute;
top: 0;
left: 0;
transition: 0.3s;
    img {
      position: absolute;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`;
