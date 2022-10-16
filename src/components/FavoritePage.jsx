import React from 'react';
import { useEffect } from 'react';
import './styles/propertyListing.scss';

const FavoritePage = ({ searchString, properties, favorite, setFavorite }) => {
  return (
    <div className="property_listing">
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

              <div className="rent">
                <h3>
                  ${prop.price} <span>/month</span>
                </h3>
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={() => addToFavorite(prop)}
                >
                  Favorite
                </p>
              </div>

              <div className="title">
                <h3>
                  {prop.title}
                  <span> {prop.type}</span>
                </h3>
                <p>{prop.address}</p>
              </div>

              <div className="features">
                <p>{prop.features.beds} Beds</p>
                <p>{prop.features.Bathroom} Bathrooms</p>
                <p>{prop.features.squarefeet} m2</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default FavoritePage;
