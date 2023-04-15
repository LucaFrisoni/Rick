import { render, screen } from '@testing-library/react';
import App from '../../../../FT-M2-master/06-React-Intro/homework/src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
