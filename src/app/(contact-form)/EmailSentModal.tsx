import React from 'react';
import Modal from '@/components/Modal';

interface Props {
  isOpen: boolean;
  close: () => void;
  success: boolean;
}
const EmailSentModal = ({isOpen, close, success}: Props) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="email-sent-modal">
        <h2>{success ? 'Thank you!' : 'Something went wrong'}</h2>
        <p>{success ? 'We will get in touch with you as soon as possible.' : 'Please try again later'}</p>
      </div>
    </Modal>
  );
};

export default EmailSentModal;
