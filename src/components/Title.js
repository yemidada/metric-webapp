import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <div className="page-title">
    <div className="container">
      {title}
    </div>

  </div>
);

Title.defaultProps = {
  title: PropTypes.string,
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
