import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

export interface AvatarProps{
  avatarURL: string; 
  altText: string;
}

export const UserAvatarWrapper = styled.div`
  img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

const Avatar: FunctionComponent<AvatarProps> = ({avatarURL, altText}) => {
  return(
    <UserAvatarWrapper>
      <img src={avatarURL} alt={altText} />
    </UserAvatarWrapper>
  )
}

export default Avatar;