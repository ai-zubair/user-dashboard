import React, { ReactChild, ReactElement } from 'react'
import { HeaderWrapper } from './HeaderStyled';

interface HeaderProps{
  children?: ReactChild;
}

const Header = ({children}: HeaderProps): ReactElement => {
  return (
    <div>
      <HeaderWrapper>
        {children}
      </HeaderWrapper>
    </div>
  )
}

export default Header;
