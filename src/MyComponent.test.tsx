import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders learn react link', () => {
  const { getByText } = render(<MyComponent type="primary" />);
  const labelElement = getByText(/primary/i);
  expect(labelElement).toBeInTheDocument();
});
