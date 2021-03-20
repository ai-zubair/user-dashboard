import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { APP_ROUTES } from './config/routes';
import { Link } from 'react-router-dom';

const FourOFourWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  a{
    text-decoration: none;
    background-color: var(--primary-background-color);
    box-shadow: 0px 0px 2px 0px black;
    border-radius: 2px;
    color: white;
    padding: 5px 10px;
    display: block;
    margin: 0px 5px;
  }
`;

const FourOFour: FunctionComponent = () => {
  return (
    <FourOFourWrapper>
      Uh! Oh! There is nothing here! Go to 
      <Link to={APP_ROUTES.DASHBOARD}>{` DASH BOARD `}</Link>
      instead!
    </FourOFourWrapper>
  )
}

export default FourOFour;