import React, { FunctionComponent, JSXElementConstructor } from 'react';
import styled from 'styled-components';

namespace Wrappers{
  export const LoaderWrapper = styled.div<SpinnerProps>`
    &::after{
      display: block;
      content: "";
      height: ${props => props.variant === "small" ? '10px' : props.variant === "regular" ? '20px': '30px' };
      width: ${props => props.variant === "small" ? '10px' : props.variant === "regular" ? '20px': '30px' };
      border-radius: 50%;
      border: ${props => props.variant === "small" ? '5px solid #efefef' : props.variant === "regular" ? '10px solid #efefef': '15px solid #efefef' };
      border-top: ${props => props.variant === "small" ? `5px solid ${props.color || '#404040'}` : props.variant === "regular" ? `10px solid ${props.color || '#404040'}`: `15px solid ${props.color || '#404040'}` };
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

interface SpinnerProps{
  isHidden?: boolean;
  variant?: "regular" | "small" | "large";
  color?: string;
}

const Spinner: FunctionComponent<SpinnerProps> = function Spinner({isHidden, variant, color}) {
  if(isHidden){
    return null;
  }
  return (
    <Wrappers.LoaderWrapper variant={variant} color={color}  />
  )
}

export { Spinner };
