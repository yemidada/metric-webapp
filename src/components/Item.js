import { Link } from 'react-router-dom';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Item = ({ item }) => (
  <Link to="/details" state={{ data: item }} className="col-6 col-md-4 page-item">
    <div>
      {item && item.icon && <img className="px-5" src={item.icon} alt="doc" />}
      <div className="item-detail py-3">
        <p>{item && item.name ? item.name : ''}</p>
        <p className="value">{item && item.owned ? item.owned : ''}</p>
      </div>
    </div>
    <FontAwesomeIcon icon={faCircleRight} className="icon" />
  </Link>
);

Item.defaultProps = {
  item: PropTypes.shape(),
};

Item.propTypes = {
  item: PropTypes.shape(),
};
export default Item;
