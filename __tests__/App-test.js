/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

it('correct addition', () => {
  expect(1 + 1).toBe(2)
});

it('incorrect addition', () => {
  expect(1 + 2).toBe(3)
});

it('correct substraction', () => {
  expect(5 - 2).toBe(3)
});