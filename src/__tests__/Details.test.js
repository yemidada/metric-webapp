import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Details from '../pages/Details';

describe('Homepage component test', () => {
  it('should render Home page correctly', () => {
    const details = render(
      <Router>
        <Provider store={store}>
          <Details />
        </Provider>
      </Router>,
    );

    expect(details).toMatchSnapshot();
  });
});