import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('Should render primary label', () => {
  const { getByText } = render(<MyComponent type="primary" />);
  const labelElement = getByText(/primary/i);
  expect(labelElement).toBeInTheDocument();
});

test('Should throw error by purpose', () => {
  const { getByText } = render(<MyComponent type="other" />);
  const labelElement = getByText(/ERROR/i);
  expect(labelElement).toBeInTheDocument();
});

test('Should render secondary label', () => {
  const { getByText } = render(<MyComponent type="secondary" />);
  const labelElement = getByText(/secondary/i);
  expect(labelElement).toBeInTheDocument();
});

test('Should throw error by purpose for second time', () => {
  const { getByText } = render(<MyComponent type="other" />);
  const labelElement = getByText(/ERROR/i);
  expect(labelElement).toBeInTheDocument();
});