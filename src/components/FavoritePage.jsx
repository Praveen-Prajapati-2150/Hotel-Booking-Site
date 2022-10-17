import React from 'react';
import { useEffect } from 'react';
import './styles/propertyListing.scss';
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { BiArea } from 'react-icons/bi';
import { BiHeartCircle } from 'react-icons/bi';
// import { IoIosHeartDislike } from 'react-icons/ioios';

const FavoritePage = ({ searchString, properties, favorite, setFavorite }) => {
  const removeToFavorite = (prop) => {
    setFavorite(favorite.filter((item) => item.id !== prop.id));
  };

  return (
    <div className="property_listing">
      {/* {[...Array(10)].map((prop) => { */}
      {properties?.map((prop, index) => {
        if (
          prop.address.toLowerCase().includes(searchString.toLowerCase()) ||
          prop.title.toLowerCase().includes(searchString.toLowerCase())
        )
          return (
            <div key={index} className="property_card">
              <div className="image">
                <img src={prop.img} />
              </div>

              <div></div>

              <div className="rent">
                <h3>
                  ${prop.price} <span>/month</span>
                </h3>
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() => removeToFavorite(prop)}
                >
                  <BiHeartCircle className="icon" />;
                </button>
              </div>

              <div className="title">
                <h3>
                  {prop.title}
                  <span> {prop.type}</span>
                </h3>
                <p>{prop.address}</p>
              </div>

              <div className="features">
                <p>
                  <BiBed className="icon" /> {prop.features.beds} Beds
                </p>
                <p>
                  <BiBath className="icon" />
                  {prop.features.Bathroom} Bathrooms
                </p>
                <p>
                  <BiArea className="icon" />
                  {prop.features.squarefeet} m2
                </p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default FavoritePage;
