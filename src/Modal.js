import React from 'react';

const Modal = ({ product, handleCloseModal }) => {
    const { id, title, price, image, description } = product;

    return (
        <div className="modal">
            <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
                <h2>{title}</h2>
                <img src={image} alt={title} />
                <p>{description}</p>
                <p>Precio: ${price}</p> {}
                <button className="btn btn-primary" onClick={handleCloseModal}>
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
