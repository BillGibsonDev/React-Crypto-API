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
height: 200px;
width: 60%;
margin: 30px auto 50px auto;
  img {
    width: 250px;
    height: 200px;
    margin-right: 20px;
  }
  .text-container {
    a {
      color: ${palette.titleColor};
      font-weight: 700;
      font-size: ${palette.paraSize};
      &:hover {
        border-bottom: 1px solid white;
      }
    }
    h2 {
      margin: 6px 0;
      font-size: ${palette.paraSize};
      color: ${palette.accentColor}
    }
    p {
      color: ${palette.subtitleColor};
    }
  }
`;