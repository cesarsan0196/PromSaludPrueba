import React from 'react';
import { render } from '@testing-library/react';
import Appsito from './Appsito';

test('renders without crashing', () => {
  const { baseElement } = render(<Appsito />);
  expect(baseElement).toBeDefined();
});
