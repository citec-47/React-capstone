import { Link } from 'react-router-dom';
import back from './image/bac.png';
import microphone from './image/micro.png';
import setting from './image/set.png';

const NavBar = () => (
  <div className="top-header">
    <Link to="/"><img src={back} alt="Back Icon" className="back-im" /></Link>
    <h1>Countries</h1>
    <div className="right-icon">
      <img src={microphone} alt="Microphone icon" />
      <img src={setting} alt="Setting icon" className="set-img" />
    </div>
  </div>
);

export default NavBar;
