import React from 'react';
import { useState } from 'react';
import './styles/filter.scss';
import { BiSearchAlt } from 'react-icons/bi';

const Filter = ({
  searchString,
  setSearchString,
  filters,
  setFilters,
  filterProperties,
}) => {
  return (
    <div className="filter_section">
      <div className="heading">
        <h3>Search properties to rent</h3>
        <div className="search">
          <BiSearchAlt className="icon" />
          <input
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            type="text"
            placeholder="Search with property name or address"
          />
        </div>
      </div>

      <div className="filter">
        <div className="filter_sub">
          <p>Location</p>
          <select
            onChange={(e) => {
              setFilters({ ...filters, city: e.target.value });
            }}
          >
            <option value="" disable hidden selected>
              city
            </option>
            <option value="">All</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
            <option value="jaipur">Jaipur</option>
            <option value="kolkata">Kolkata</option>
          </select>
          {/* <h3>New York, USA</h3> */}
        </div>
        <div className="filter_sub ">
          <div className="date_sub">
            <div className="date">
              <p>Check In</p>
              <input type={'date'} />
            </div>
            <div className="date">
              <p>Check Out</p>
              <input type={'date'} />
            </div>
          </div>
          {/* <h3>Select Move-in Date</h3> */}
        </div>
        <div className="filter_sub">
          <p>Price</p>
          <select
            onChange={(e) => {
              setFilters({ ...filters, price: e.target.value });
            }}
          >
            <option value="" disable hidden selected>
              price
            </option>
            <option value="">All</option>
            <option value="100-500">$100-$500</option>
            <option value="501-1000">$501-$1000</option>
            <option value="1001-5000">$1001-$5000</option>
            <option value="5001-10000">$5001-$10000</option>
          </select>
        </div>
        <div className="filter_sub">
          <p>Property Type</p>
          <select
            onChange={(e) => {
              setFilters({ ...filters, house: e.target.value });
            }}
          >
            <option value="" disable hidden selected>
              type
            </option>
            <option value="">All</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="farm house">Farm House</option>
          </select>
        </div>
        <div className="filter_sub">
          <button
            onClick={() => {
              if (filters.price || filters.city || filters.type) {
                filterProperties();
              }
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
