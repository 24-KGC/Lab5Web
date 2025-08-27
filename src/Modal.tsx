import React from 'react';
import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  position: 'relative',
  minWidth: '300px',
};

const closeBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};

export default Modal;
