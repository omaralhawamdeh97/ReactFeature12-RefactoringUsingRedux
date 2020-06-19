import React, { useState } from "react";

// Components
import CookieModal from "../modals/CookieModal";

// Styling
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ createCookie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <CookieModal
        isOpen={isOpen}
        closeModal={closeModal}
        createCookie={createCookie}
      />
    </>
  );
};

export default AddButton;
