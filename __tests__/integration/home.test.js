import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../../src/screens/home';

describe('<Home />', () => {
  it('renders a list of notes', () => {
    const screen = render(<Home />);

    expect(screen.queryByText('Note 1')).toBeTruthy();
    expect(screen.queryByText('Note 2')).toBeTruthy();
    expect(screen.queryByText('Note 3')).toBeTruthy();
    expect(screen.queryByText('Note 4')).toBeTruthy();
    expect(screen.queryByText('Note 5')).toBeTruthy();
  });
});
