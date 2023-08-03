import PropTypes from 'prop-types';

const Title = ({ title, onTyping, showSearch }) => (
  <div className="container-fluid">
    <div className="page-title">
      <div className="row d-flex d-flex justify-content-center align-items-center">

        <span className="col-6">{title}</span>
        {
        showSearch && <div className="col-4"><input placeholder="Search for hair" onChange={onTyping} className="form-control search " /></div>
      }
      </div>
    </div>
  </div>
);

Title.defaultProps = {
  title: PropTypes.string,
  onTyping: PropTypes.func,
  showSearch: PropTypes.bool,
};

Title.propTypes = {
  title: PropTypes.string,
  onTyping: PropTypes.func,
  showSearch: PropTypes.bool,
};

export default Title;
