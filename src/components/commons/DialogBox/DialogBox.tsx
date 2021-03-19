import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../Button/Button';

Modal.setAppElement(document.getElementById('modal-root') as HTMLDivElement);

Modal.defaultStyles.overlay = {
  ...Modal.defaultStyles.overlay,
  backgroundColor: '#000000d4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

Modal.defaultStyles.content = {
  ...Modal.defaultStyles.content,
  position: 'relative',
  width: '600px',
  inset: '0px'
}

interface DialogBoxOption{
  optionLabel: string;
  optionColor: string;
  onOptionClick(): void;
}


interface DialogBoxProps{
  isDialogBoxShown: boolean;
  dialogLabel: string;
  options: [DialogBoxOption, DialogBoxOption]
}

interface OptionWrapperProps{
  optionOneColor: string;
  optionTwoColor: string;
}

const DialogBoxContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DialogBoxLabel = styled.p`
  font-size: 20px;
  font-weight: 300;
`;


const DialogBoxOptionsWrapper = styled.div<OptionWrapperProps>`
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

const DialogBox: FunctionComponent<DialogBoxProps> = (props) => {
  const { isDialogBoxShown, dialogLabel, options } = props;
  const [ optionOne, optionTwo ] = options;
  return (
    <Modal isOpen={isDialogBoxShown}>
      <DialogBoxContentWrapper>
        <DialogBoxLabel>
          {dialogLabel}
        </DialogBoxLabel>
        <DialogBoxOptionsWrapper optionOneColor={optionOne.optionColor} optionTwoColor={optionTwo.optionColor}>
          <Button buttonText={optionOne.optionLabel} onButtonClick={optionOne.onOptionClick}/>
          <Button buttonText={optionTwo.optionLabel} onButtonClick={optionTwo.onOptionClick}/>
        </DialogBoxOptionsWrapper>
      </DialogBoxContentWrapper>
    </Modal>
  )
}

export default DialogBox;