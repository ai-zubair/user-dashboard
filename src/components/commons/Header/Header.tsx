import React, { ReactChild, ReactElement } from 'react'
import { HeaderWrapper } from './HeaderStyled';

interface HeaderProps{
  children?: ReactChild | ReactChild[];
}


const HEADER_TEXT = 'User Dashboard';

const Header = ({children}: HeaderProps): ReactElement => {
  return (
    <HeaderWrapper>
      <p className="app-label">{HEADER_TEXT}</p>
      {children}
    </HeaderWrapper>
  )
}

export default Header;
