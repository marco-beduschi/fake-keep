import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '.';

describe('<HomeScreen />', () => {
  it('renders a list of notes', () => {
    const screen = render(<HomeScreen />);

    expect(screen.queryByText('Note 1')).toBeTruthy();
    expect(screen.queryByText('Note 2')).toBeTruthy();
    expect(screen.queryByText('Note 3')).toBeTruthy();
    expect(screen.queryByText('Note 4')).toBeTruthy();
    expect(screen.queryByText('Note 5')).toBeTruthy();
  });
});
