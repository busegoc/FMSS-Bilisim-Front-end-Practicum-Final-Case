import React, { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/ShipsContext';
import './SearchForm.css';

const SearchForm = () => {
  const { setShips, setResultTitle, originalShips } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  const [showAllButton, setShowAllButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim().toLowerCase();

    if (tempSearchTerm.length === 0) {
      setResultTitle('Please Enter Something ...');
      setShips([]);
      setShowAllButton(true);
    } else {
      const filteredShips = originalShips.filter((ship) => {
        return (
          ship.name.toLowerCase().includes(tempSearchTerm) ||
          ship.model.toLowerCase().includes(tempSearchTerm)
        );
      });
      if (filteredShips.length === 0) {
        setResultTitle(`No results found for "${tempSearchTerm}". Please check your ship name or model.`);
        setShips(originalShips);
        setShowAllButton(true);


      } else {
        setShips(filteredShips);
        setResultTitle(`Showing Results for "${tempSearchTerm}": ${filteredShips.length} items found`);
        setShowAllButton(true);

      }
    }
    searchText.current.value = '';
    navigate('/starships');
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type='text' className='form-control' placeholder='enter a name or model...' ref={searchText} />
              <button type='submit' className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-orange' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
      {showAllButton && (
        <button
          className='go-back-to-all-button'
          onClick={() => {
            setShips(originalShips);
            setResultTitle('Starships List');
            setShowAllButton(false);
          }}>Go Back to All Ships</button>
      )}
    </div>
  );
};

export default SearchForm;