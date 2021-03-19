import React, { FunctionComponent } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Button from '../Button/Button';
import { DialogBoxContentWrapper, DialogBoxLabelWrapper, DialogBoxOptionsWrapper } from './DialogBoxStyled';

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
  inset: '0px',
  padding: '60px 40px'
}
interface DialogBoxProps{
  isDialogBoxShown: boolean;
  dialogLabel: string;
  optionOneLabel: string;
  optionOneColor: string;
  optionTwoLabel: string;
  optionTwoColor: string;
  onOptionOneClick(): void;
  onOptionTwoClick(): void;
}


const DialogBox: FunctionComponent<DialogBoxProps> = (props) => {
  const { 
    isDialogBoxShown, 
    dialogLabel, 
    optionOneLabel, 
    optionOneColor, 
    optionTwoLabel, 
    optionTwoColor, 
    onOptionOneClick, 
    onOptionTwoClick 
  } = props;

  return (
    <Modal isOpen={isDialogBoxShown}>
      <DialogBoxContentWrapper>
        <DialogBoxLabelWrapper>
          {dialogLabel}
        </DialogBoxLabelWrapper>
        <DialogBoxOptionsWrapper optionOneColor={optionOneColor} optionTwoColor={optionTwoColor}>
          <Button buttonText={optionOneLabel} onButtonClick={onOptionOneClick}/>
          <Button buttonText={optionTwoLabel} onButtonClick={onOptionTwoClick}/>
        </DialogBoxOptionsWrapper>
      </DialogBoxContentWrapper>
    </Modal>
  )
}

export default DialogBox;