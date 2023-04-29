import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import "./ShipDetails.css"
import { useGlobalContext } from '../../context/ShipsContext';

function ShipDetails({ ship, onClose }) {
  const { images } = useGlobalContext();

  const findMatchedImg = (name) => {
    return images.find((img) => img.name === name);
  };

  const matchedImg = findMatchedImg(ship.name);
  return (
    <Modal className='modal' show={true} onHide={onClose}>
      <Modal.Header className='modal-header' closeButton>
        <Modal.Title><h2>{ship.name}</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-content'>
        <div>
          {matchedImg && (
            <img className='modal-img' src={matchedImg.img} alt={matchedImg.name} />
          )}
        </div>
        <div className='modal-ship-properties'>
          <p><strong>Model:</strong> {ship.model}</p>
          <p><strong>Hyperdrive Rating:</strong> {ship.hyperdrive_rating}</p>
          <p><strong>Passengers:</strong> {ship.passengers}</p>
          <p><strong>Max Atmosphering Speed:</strong> {ship.max_atmosphering_speed}</p>
          <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
          <p><strong>Crew:</strong> {ship.crew}</p>
          <p><strong>Cargo Capacity:</strong> {ship.cargo_capacity}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className='close-btn' variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShipDetails;