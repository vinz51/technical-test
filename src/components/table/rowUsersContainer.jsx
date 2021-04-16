import { useCallback, useState } from 'react';
import ReactModal from 'react-modal';

import Form from '../shifts/creation/form';
import RowUsers from './rowUsers';

const RowUsersContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOpions] = useState({});

  const toggleModal = useCallback(() => {
    if (isOpen) {
      setOpions({});
    }
    setIsOpen((previous) => !previous);
  }, []);

  const handleClick = useCallback((_, newOptions) => {
    toggleModal();
    setOpions(newOptions);
  }, []);

  return (
    <>
      <RowUsers onClick={handleClick} />
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
      >
        {isOpen && <Form {...options} toggleModal={toggleModal} />}
      </ReactModal>
    </>
  );
}

export default RowUsersContainer;
