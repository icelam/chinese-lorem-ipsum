import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { lightTheme, darkTheme } from '@styles/colors';
import { mediaColorScheme } from '@styles/media';

const SelectWrapper = styled.label`
  position: relative;
  margin: 0 4px;

  &:before {
    position: absolute;
    top: 50%;
    right: 5px;
    margin-top: -3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: ${lightTheme.secondaryTextColor} transparent transparent transparent;
    content: " ";

    @media ${mediaColorScheme.dark} {
      border-color: ${darkTheme.secondaryTextColor} transparent transparent transparent;
    }
  }
`;

const SelectBox = styled.select`
  position: relative;
  padding: 0.25em 22px 0.25em 10px;
  margin: 0;
  border: 1px solid ${lightTheme.secondaryTextColor};
  border-radius: 4px;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25em;
  appearance: none;
  box-shadow: none;
  outline: none;

  @media ${mediaColorScheme.dark} {
    border: 1px solid ${darkTheme.secondaryTextColor};
    color: ${darkTheme.mainTextColor};
  }

  &::-ms-expand {
    display: none;
  }
`;

const Select = React.forwardRef(({ name, id, onChange, defaultValue, children }, ref) => (
    <SelectWrapper>
      <SelectBox name={name} id={id} onChange={onChange} ref={ref} defaultValue={defaultValue}>
        { children }
      </SelectBox>
    </SelectWrapper>
  )
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultValue: PropTypes.any.isRequired
};

export default Select;