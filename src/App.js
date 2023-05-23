/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Homepage from './components/myHomePage';
import { countriesItems } from './Redux/country/countrySlice';
import DatailePage from './components/myDetailPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countriesItems());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries/:fName" element={<DatailePage />} />
      </Routes>

    </>
  );
}

export default App;
