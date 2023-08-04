import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Details = ({ title, answer }) => (
  <div className="p-3 page-details d-flex justify-content-between align-items-center">
    <div>
      {title}
    </div>
    <div>
      <span className="answer">{ answer }</span>
      <FontAwesomeIcon icon={faCircleRight} />
    </div>
  </div>
);

Details.defaultProps = {
  answer: PropTypes.string,
  title: PropTypes.string,
};

Details.propTypes = {
  answer: PropTypes.string,
  title: PropTypes.string,
};

export default Details;
