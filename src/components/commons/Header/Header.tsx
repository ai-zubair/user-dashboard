import React, { ReactChild, ReactElement } from 'react'
import { HeaderWrapper } from './HeaderStyled';

interface HeaderProps{
  children?: ReactChild[];
}


const Header = ({children}: HeaderProps): ReactElement => {
  return (
    <HeaderWrapper>
      <p className="app-label">User Dashboard</p>
      {children}
    </HeaderWrapper>
  )
}

export default Header;
