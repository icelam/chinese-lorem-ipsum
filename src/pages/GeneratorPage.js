import React from 'react';

import Container from '@components/Container';
import Header from '@components/Header';
import Article from '@containers/ArticleContainer';

const GeneratorPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Article />
      </Container>
    </div>
  )
};

export default GeneratorPage;