import PropTypes from 'prop-types';

const Feature = ({ item }) => (
  <div className="page-feature">
    <div className="container">
      <div className="row">
        <div className="col-6">
          {
            item && item.icon && <img src={item.icon} alt="doc" />
          }
        </div>
        <div className="col-6 item-detail">
          <p>{item && item.name ? item.name : ''}</p>
          <p className="value">{item && item.owned ? item.owned : ''}</p>
        </div>
      </div>
    </div>
  </div>
);

Feature.defaultProps = {
  item: {},
};

Feature.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string,
    owned: PropTypes.string,
  })),
};
export default Feature;
