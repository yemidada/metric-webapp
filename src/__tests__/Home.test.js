import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../pages/Home';

describe('Homepage component test', () => {
  it('should render Home page correctly', () => {
    const homepage = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>,
    );

    expect(homepage).toMatchSnapshot();
  });
});