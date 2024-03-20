import React from 'react';
import { render, screen } from '@testing-library/react';
import {HeaderComponent} from './HeaderComponent';

test('renders learn react link', () => {
  render(<HeaderComponent />);
  const button = screen.getByText(/about/i);
  expect(button).toBeInTheDocument();
});
