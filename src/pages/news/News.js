import { useState, useEffect } from 'react';
import axios from 'axios';

// styled
import styled from 'styled-components';
import * as palette from '../../styled/ThemeVariables.js';

// components
import { Article } from './components/Article';

export const News = () => {

    const [ news, setNews ] = useState([]);

    useEffect(() => {
        const handleNews = () => {
            const options = {
                method: 'GET',
                url: 'https://crypto-news14.p.rapidapi.com/news/coindesk',
                headers: {
                    'X-RapidAPI-Host': 'crypto-news14.p.rapidapi.com',
                    'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_KEY}`
                }
            };
            axios.request(options).then(function(response){
                console.log(response.data);
                setNews(response.data)
            }).catch(function (error) {
                console.error(error);
            });
        }
        handleNews();
    }, [])


  return (
    <StyledNews>
        {
            news.map((article, index) =>{
                return (
                    <Article
                        key={index}
                        title={article.title}
                        image={article.image}
                        date={article.date}
                        desc={article.desc}
                        site={`https://www.coindesk.com${article.url}`}
                    />
                )
            })
        }
    </StyledNews>
  )
}

const StyledNews = styled.section`

`;
