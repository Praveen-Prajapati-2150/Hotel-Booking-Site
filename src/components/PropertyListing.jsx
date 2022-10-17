import React from 'react';
import { useEffect } from 'react';
import './styles/propertyListing.scss';
import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { GrFavorite } from 'react-icons/gr';
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { BiArea } from 'react-icons/bi';
import { BiHeartCircle } from 'react-icons/bi';

const PropertyListing = ({
  searchString,
  properties,
  setProperties,
  favorite,
  setFavorite,
}) => {
  // const [favorite, setFavorite] = useState([]);

  console.log(favorite);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const addToFavorite = (prop) => {
    if (favorite.length === 0) {
      setFavorite([...favorite, prop]);
    } else {
      favorite?.filter((favr) => {
        console.log(favr);
        if (favr.id !== prop.id) {
          setFavorite([...favorite, prop]);
        }
      });
      // }
    }
  };

  console.log(favorite);
  // console.log('properties', properties);

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
                  onClick={() => addToFavorite(prop)}
                >
                  {/* {favorite?.map((item) => {
                    if (prop.id === item.id) { */}
                  <BiHeartCircle className="icon" />;{/* } */}
                  {/* })} */}
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

export default PropertyListing;
