import React, { JSXElementConstructor } from 'react';
import styled from 'styled-components';

namespace Wrappers{
  export const LoaderWrapper = styled.div`
    &::after{
      display: block;
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 10px solid #efefef;
      border-top: 10px solid #404040;
      animation: spin 1s ease-out infinite normal;
    }
    @keyframes spin{
        from{
          transform: rotate(0deg);
        }
        to{
          transform: rotate(360deg);
        }
      }
  `;
}

const Spinner: JSXElementConstructor<{}> = function Spinner() {
  return (
    <Wrappers.LoaderWrapper />
  )
}

export { Spinner };
