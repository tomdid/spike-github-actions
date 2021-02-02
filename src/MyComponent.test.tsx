import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

test('Should render primary label', () => {
  const { getByText } = render(<MyComponent type="primary" />);
  const labelElement = getByText(/primary/i);
  expect(labelElement).toBeInTheDocument();
});


test('Should render secondary label', () => {
  const { getByText } = render(<MyComponent type="secondary" />);
  const labelElement = getByText(/secondary/i);
  expect(labelElement).toBeInTheDocument();
});

test('Should render `Other...` label', () => {
  const { getByText } = render(<MyComponent type="other" />);
  const labelElement = getByText("Other...");
  expect(labelElement).toBeInTheDocument();
});

test('Repeat test for cache action check', () => {
  const { getByText } = render(<MyComponent type="other" />);
  const labelElement = getByText("Other...");
  expect(labelElement).toBeInTheDocument();
});

