import React, { useState } from 'react';
import "./CardList.css";
import { useGlobalContext } from '../../context/ShipsContext';
import ShipDetails from '../ShipDetails/ShipDetails';
import { BsThreeDotsVertical } from "react-icons/bs";
const Card = (ship) => {
    const { images } = useGlobalContext();
    const [showModal, setShowModal] = useState(false);

    const findMatchedImg = (name) => {
        return images.find((img) => img.name === name);
    };

    const matchedImg = findMatchedImg(ship.name);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <div className='ship-item flex flex-column flex-sb'>
            <div className='ship-item-img'>
                {matchedImg && (
                    <img src={matchedImg.img} alt={matchedImg.name} />
                )}
            </div>
            <div className='ship-item-info text-center'>
                <div>
                    <div className='ship-item-info-item title fw-7 fs-18'>
                        <span className='text-capitalize fw-7'>{ship.name}</span>
                    </div>
                </div>
                <div className='ship-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Model: </span>
                    <span>{ship.model}</span>
                </div>
                <div className='ship-item-info-item edition-count fs-15'>
                    <span className='text-capitalize fw-7'> Hyperdrive Rating: </span>
                    <span>{ship.hyperdrive_rating}</span>
                </div>
                <div>
                    <button className='detailbtn' onClick={handleClick}><BsThreeDotsVertical /> Show Details</button>
                </div>
            </div>
            {showModal && <ShipDetails ship={ship} onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Card;