import styled from 'styled-components';

interface OptionWrapperProps{
  optionOneColor: string;
  optionTwoColor: string;
}

export const DialogBoxContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DialogBoxLabelWrapper = styled.p`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 0px;
`;


export const DialogBoxOptionsWrapper = styled.div<OptionWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  button{
    border: none;
    width: 120px;
    font-weight: 300;
    &:nth-child(1){
      background-color: ${props=>props.optionOneColor};
      margin-right: 30px;
    }
    &:nth-last-child(1){
      background-color: ${props=>props.optionTwoColor};
    }
  }
`;