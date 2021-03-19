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


const DialogBox: FunctionComponent<DialogBoxProps> = (props) => {
  const { isDialogBoxShown, dialogLabel, options } = props;
  const [ optionOne, optionTwo ] = options;
  return (
    <Modal isOpen={isDialogBoxShown}>
      <DialogBoxContentWrapper>
        <DialogBoxLabelWrapper>
          {dialogLabel}
        </DialogBoxLabelWrapper>
        <DialogBoxOptionsWrapper optionOneColor={optionOne.optionColor} optionTwoColor={optionTwo.optionColor}>
          <Button buttonText={optionOne.optionLabel} onButtonClick={optionOne.onOptionClick}/>
          <Button buttonText={optionTwo.optionLabel} onButtonClick={optionTwo.onOptionClick}/>
        </DialogBoxOptionsWrapper>
      </DialogBoxContentWrapper>
    </Modal>
  )
}

export default DialogBox;