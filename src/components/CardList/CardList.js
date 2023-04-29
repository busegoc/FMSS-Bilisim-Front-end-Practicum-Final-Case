import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/ShipsContext';
import Card from "../CardList/Card";
import Loading from "../Loader/Loader";
import "./CardList.css";
import Header from '../Header/Header';
import btnImg from "../images/up-arrow.png"

const CardList = () => {
  const { ships, loading, resultTitle, loadMore } = useGlobalContext();
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  if (loading) return <Loading />;

  return (
    <section className='shiplist'>
      <Header />
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='shiplist-content grid'>
          {
            ships.map((item, index) => {
              return (
                <Card key={index} {...item} />
              )
            })
          }

        </div>
        <div className='btnClass'>
          {ships.length >= 8 && ships.length < 36 ? (
            <button className="loadMore" onClick={loadMore}>load more</button>
          ) : (
            <div className="end-of-list">End of List</div>
          )}
        </div>
        <div className="scroll-to-top">
          {isVisible && (
            <button onClick={scrollToTop} ><img src={btnImg} alt='go top' /></button>
          )}
        </div>
      </div>
    </section>
  )
}

export default CardList