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
    img: './house.jpg',
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
    img: './palace.jpg',
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
    img: './palace.jpg',
    price: '9999',
    title: 'Peru Island',
    address: 'Indore Palace, Udaipur Lake, Indore',
    type: 'villa',
    features: {
      beds: '3',
      Bathroom: '2',
      squarefeet: '5x7',
    },
  },
  {
    id: '4',
    img: './house_2.jpg',
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
    img: './house_2.jpg',
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
    img: './house.jpg',
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
    img: './house.jpg',
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
    img: './house.jpg',
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
  const [showFavoritePage, setShowFavoritePage] = useState(false);

  console.log({ showFavoritePage });

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
