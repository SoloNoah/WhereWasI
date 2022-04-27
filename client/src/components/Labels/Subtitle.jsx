import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.p`
  font-size: ${(props) => (props.lg ? '20px' : '17px')};
  text-align: center;
  color: #fff;
  font-weight: ${(props) => (props.lg ? 'bold' : 'normal')};

  @media only screen and (max-width: 1280px) {
    font-size: ${(props) => (props.lg ? '17px' : '15px')};
  }
`;

const Subtitle = ({ subtitle, lg }) => {
  if (lg) {
    return <SubTitle lg>{subtitle}</SubTitle>;
  }
  return <SubTitle>{subtitle}</SubTitle>;
};

export default Subtitle;
