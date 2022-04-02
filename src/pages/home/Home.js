// styled
import styled from "styled-components"

// sections
import { Landing } from "./sections/Landing";
import { Ribbon } from "./sections/Ribbon";
import { Info } from "./sections/Info";

export const Home = () => {
  return (
    <StyledHome>
      <Landing />
      <Ribbon />
      <Info />
    </StyledHome>
  )
}

const StyledHome = styled.section``;

