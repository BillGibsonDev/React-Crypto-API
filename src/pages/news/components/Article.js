// styled
import styled from 'styled-components';
import * as palette from '../../../styled/ThemeVariables.js';

export const Article = ({ title, desc, image, date, site}) => {
  return (
    <StyledArticle>
      <img src={image} alt="" />
      <div className="text-container">
        <a href={site} target="_blank" rel="noreferrer">{title}</a>
        <h2>{date}</h2>
        <p>{desc}</p>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.div`
display: flex;
height: 250px;
width: 70%;
margin: 30px auto 50px auto;
  @media (max-width: 1000px){
    width: 90%;
    height: 100%;
  }
  @media (max-width: 760px){
    flex-direction: column;
  }
  img {
    width: 250px;
    height: 200px;
    margin-right: 20px;
    @media (max-width: 760px){
      height: 200px;
      width: 100%;
    }
  }
  .text-container {
    a {
      color: ${palette.titleColor};
      font-weight: 700;
      font-size: ${palette.paraSize};
      @media (max-width: 450px){
        font-size: 16px;
      }
      &:hover {
        border-bottom: 1px solid white;
      }
    }
    h2 {
      margin: 6px 0;
      font-size: ${palette.paraSize};
      color: ${palette.accentColor};
    }
    p {
      color: ${palette.subtitleColor};
    }
  }
`;