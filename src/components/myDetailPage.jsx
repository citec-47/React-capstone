import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './myNavBar';

const DatailePage = () => {
  const { fName } = useParams();

  const { myCountryData } = useSelector((store) => store.country);
  const rareName = myCountryData.find((item) => item.name === fName);

  return (
    <>
      <NavBar />
      <div className="datail-container">
        <div className="im-containter">
          <h1 className="headin-text">{rareName.name ? rareName.name : 'none'}</h1>
          <img src={rareName.flag} alt={rareName.name} className="flags-img" />
        </div>
        <div className="status-bar"><h2 className="country-status">City/Town BreakDown - 2023</h2></div>
        <h2 className="itemS-Info">
          <span>Name:</span>
          {rareName.name ? rareName.name : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Capital:</span>
          {rareName.capital ? rareName.capital : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Continent:</span>
          {rareName.continent ? rareName.continent : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Population:</span>
          {rareName.population ? rareName.population : 'none'}
        </h2>
        <h2 className="itemS-Info">
          <span>Area:</span>
          {rareName.area ? rareName.area : 'none'}
          km²
        </h2>
        <h2 className="itemS-Info"><a href={rareName.map ? rareName.map : 'none'}>Map</a></h2>
      </div>
    </>
  );
};

export default DatailePage;
