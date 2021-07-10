import { render, screen } from '../test-utils';
import { Exchange } from '../Exchange';

test('renders title', () => {
  render(<Exchange />);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});

// SKIP_PREFLIGHT_CHECK=true yarn test
