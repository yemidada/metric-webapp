import {
  faMicrophone,
  faChevronLeft,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav data-testid="nav" className="header">
    <div>
      <Link to="/">
        <FontAwesomeIcon className="left-icon" icon={faChevronLeft} />
      </Link>

      <span>2015</span>
    </div>
    <div className="text-center title">Hair Styles</div>
    <div>
      <FontAwesomeIcon className="right-icon" icon={faMicrophone} />
      <FontAwesomeIcon className="right-icon" icon={faGear} />
    </div>
  </nav>
);
export default NavBar;
