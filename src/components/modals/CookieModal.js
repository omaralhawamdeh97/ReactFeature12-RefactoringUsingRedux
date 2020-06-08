import React, { useState } from "react";

// Styling
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

const CookieModal = ({ isOpen, closeModal, createCookie }) => {
  const [cookie, setCookie] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCookie(cookie);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={modalStyle}
      contentLabel="Example Modal"
    >
      <h3>New Cookie</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default CookieModal;
