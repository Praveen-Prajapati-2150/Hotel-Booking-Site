import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import FavoritePage from './components/FavoritePage';
import Filter from './components/Filter';
import Header from './components/Header';
import PropertyListing from './components/PropertyListing';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const data = [
  {
    id: '1',
    img: './h1.jpg',
    price: '2095',
    title: 'Palm Harbor',
    address: '2699 Green Valley, Highland Lake, Pune',
    type: 'house',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '2',
    img: './h2.jpg',
    price: '9999',
    title: 'Peru Island',
    address: 'Jaipur Palace, Udaipur Lake, Jaipur',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '3',
    img: './h3.jpg',
    price: '9999',
    title: 'Peru Island',
    address: 'Indore Palace, Udaipur Lake, Pune',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '4',
    img: './h4.jpg',
    price: '195',
    title: 'Faulkner Ave',
    address: '2699 Green Valley, Highland Lake, Mumbai',
    type: 'farm house',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '5',
    img: './h5.jpg',
    price: '101',
    title: 'Faulkner Ave',
    address: '2699 Green Valley, Highland Lake, Kolkata',
    type: 'farm house',
    features: {
      beds: '1',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '6',
    img: './h6.jpg',
    price: '299',
    title: 'Faulkner Ave',
    address: '2699 Green Valley, Highland Lake, Delhi',
    type: 'house',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '7',
    img: './h7.jpg',
    price: '795',
    title: 'Faulkner Ave',
    address: '2699 Green Valley, Highland Lake, Delhi',
    type: 'house',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '8',
    img: './h8.jpg',
    price: '501',
    title: 'Faulkner Ave',
    address: '2699 Green Valley, Highland Lake, Delhi',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '9',
    img: './h1.jpg',
    price: '501',
    title: 'Paulkner Avenue',
    address: '2699 Green Valley, Highland Lake, Kolkata',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '10',
    img: './h2.jpg',
    price: '501',
    title: 'kner Ave',
    address: '2699 Green Valley, Highland Lake, Pune',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '11',
    img: './h3.jpg',
    price: '699',
    title: 'kner Ave',
    address: '2699 Green Valley, Highland Lake, Kolkata',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '12',
    img: './h4.jpg',
    price: '9999',
    title: 'kner Ave',
    address: '2699 Green Valley, Highland Lake, Delhi',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '13',
    img: './h5.jpg',
    price: '789',
    title: 'Saudi Ave',
    address: '2699 Green Valley, Highland Lake, Mumbai',
    type: 'House',
    features: {
      beds: '3',
      Bathroom: '1',
      squarefeet: '5x7',
    },
  },
  {
    id: '15',
    img: './h6.jpg',
    price: '579',
    title: 'Saudi Ave',
    address: '2699 Green Valley, Highland Lake, Pune',
    type: 'House',
    features: {
      beds: '3',
      Bathroom: '1',
      squarefeet: '5x7',
    },
  },
  {
    id: '15',
    img: './h7.jpg',
    price: '499',
    title: 'Saudi Ave',
    address: '2699 Green Valley, Highland Lake, Jaipur',
    type: 'villa',
    features: {
      beds: '2',
      Bathroom: '1',
      squarefeet: '8x9',
    },
  },
  {
    id: '16',
    img: './h8.jpg',
    price: '899',
    title: 'Saudi Ave',
    address: '2699 Green Valley, Highland Lake, Delhi',
    type: 'farm house',
    features: {
      beds: '2',
      Bathroom: '1',
      squarefeet: '8x9',
    },
  },
];

function App() {
  const [searchString, setSearchString] = useState('');
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    city: '',
    price: '',
    house: '',
  });
  const [copyPropertiesData, setCopyPropertiesData] = useState([]);
  const [finalResult, setFinalResult] = useState();
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite')) === null
      ? []
      : JSON.parse(localStorage.getItem('favorite'))
  );

  const filterCity = (array) => {
    return array.filter((prop) => {
      return prop.address.toLowerCase().includes(filters.city.toLowerCase());
    });
  };

  const filterPrice = (array) => {
    const price_range = filters.price.split('-');

    return array.filter((prop) => {
      return (
        price_range[0] <= parseInt(prop.price) &&
        parseInt(prop.price) <= price_range[1]
      );
    });
  };

  const filterType = (array) => {
    return array.filter((prop) => {
      return prop.type.toLowerCase().includes(filters.house.toLowerCase());
    });
  };

  useEffect(() => {
    let result = copyPropertiesData;

    result = filterCity(result);
    if (filters.price) {
      result = filterPrice(result);
    }
    if (filters.house) {
      result = filterType(result);
    }

    setFinalResult(result);
    // setProperties(result);
  }, [filters]);

  const fetchFavorite = async () => {
    const data = await localStorage.getItem('favorite');
    console.log('data', data);
    if (data) setFavorite(JSON.parse(data));
  };

  useEffect(() => {
    fetchFavorite();
  }, []);

  const filterProperties = () => {
    setProperties(finalResult);
  };

  useEffect(() => {
    setProperties(data);
  }, []);

  useEffect(() => {
    setCopyPropertiesData(data);
  }, [filters]);

  // console.log(favorite);
  // console.log(copyPropertiesData);

  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Filter
                  searchString={searchString}
                  setSearchString={setSearchString}
                  filters={filters}
                  setFilters={setFilters}
                  filterProperties={filterProperties}
                />
                <PropertyListing
                  properties={properties}
                  setProperties={properties}
                  searchString={searchString}
                  favorite={favorite}
                  setFavorite={setFavorite}
                />
              </>
            }
          ></Route>

          <Route
            exact
            path="/favorite"
            element={
              <FavoritePage
                properties={properties}
                searchString={searchString}
                favorite={favorite}
                setFavorite={setFavorite}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
