import React, { useEffect } from 'react'

import Portal from './Portal/index'

import { OverLay, Dialog } from './styles'

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  },[onClose]);
  if (!open) return null;

  function onOverLayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <OverLay onClick={onOverLayClick}>
        <Dialog onClick={onDialogClick}>
          {children}
        </Dialog>
      </OverLay>
    </Portal>
  )
}

export default Modal;