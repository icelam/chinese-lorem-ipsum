import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 0 5%;
`;

const Container = ({ children, className }) => (
  <ContainerDiv className={className}>
    {children}
  </ContainerDiv>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Container;