import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Exchange } from '../Exchange';

test('renders title', () => {
  render(
    <Provider store={store}>
      <Exchange />
    </Provider>,
  );
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});

// SKIP_PREFLIGHT_CHECK=true yarn test
