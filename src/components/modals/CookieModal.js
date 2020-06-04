import React, { useState } from "react";

// Styling
import Modal from "react-modal";
import { CreateButton, modalStyle } from "../../styles";

const CookieModal = ({ isOpen, closeModal, createCookie }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCookie = {
      name,
      price,
      description,
      image,
    };
    createCookie(newCookie);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h3>New Cookie</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <CreateButton className="btn float-right" type="submit">
          Create
        </CreateButton>
      </form>
    </Modal>
  );
};

export default CookieModal;
