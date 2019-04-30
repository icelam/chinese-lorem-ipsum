import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Select from '@components/Select';

const Wrapper = styled.div`
  white-space: nowrap;
`;

const SetArticleLength = ({ allowedArticleLength, desiredArticleLength, actions }) => {
  let selectBox = null;

  const desiredLengthChange = () => {
    if (selectBox.value) {
      actions.setDesiredArticleLength(parseInt(selectBox.value));
    }

    // Back to top
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <label htmlFor="desiredLength">我想要生成約</label>
      <Select name="desiredLength" id="desiredLength" onChange={desiredLengthChange} ref={(node) => { selectBox = node }} defaultValue={desiredArticleLength}>
        { allowedArticleLength.map(l => <option value={l} key={l}>{l}</option>) }
      </Select>
      <label htmlFor="desiredLength">個的假字。</label>
    </Wrapper>
  )
};

SetArticleLength.propTypes = {
  allowedArticleLength: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  desiredArticleLength: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

export default SetArticleLength;