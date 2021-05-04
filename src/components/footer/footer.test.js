import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/2021/i);
  expect(linkElement).toBeInTheDocument();
});