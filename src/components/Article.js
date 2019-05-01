import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateTitle, genrateArticle } from '@utils/GenerateBig5'

const ArticleContainer = styled.div`
  padding: 30px 0;
`;
  
const ArticleTitle = styled.h1`
  font-size: 2em;
  line-height: 120%;
  margin: 0.5em 0 1em 0;
`;

const ArticleParagraph = styled.p`
  margin: 1em 0;
`;

const ArticleWordCount = styled.p`
  color: ${props => props.theme.secondaryTextColor};
  font-size: 0.8125em;
`;

const Article = ({ desiredArticleLength }) => {
  const [title, setTitle] = useState('');
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    setTitle(generateTitle());
    setParagraphs(genrateArticle(desiredArticleLength));
  },[desiredArticleLength]);

  return (
    <ArticleContainer>
      <ArticleTitle>{title}</ArticleTitle>
      { paragraphs.map((p, i) => <ArticleParagraph key={i}>{p}</ArticleParagraph>) }
      {
        paragraphs.length ? (
          <ArticleWordCount>總字數：標題 {title.length} 字，內文 { paragraphs.reduce((l, p) => l + p.length, 0) } 字</ArticleWordCount>
        ) : (
          null
        )
      }
    </ArticleContainer>
  )
};

Article.propTypes = {
  desiredArticleLength: PropTypes.number.isRequired
};

export default Article;