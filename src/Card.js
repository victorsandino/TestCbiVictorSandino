import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ product }) => {
    const { id, title, price, image, description } = product;
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card">
            <img src={image} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Precio: ${price}</p> {}
                <button className="btn btn-primary" onClick={handleShowModal}>
                    Ver más
                </button>
            </div>
            {showModal && (
                <Modal
                    product={product} // Pasar todo el objeto product como prop al Modal
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Card;
