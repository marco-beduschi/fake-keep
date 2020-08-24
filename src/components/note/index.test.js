import React from 'react';
import {render} from '@testing-library/react-native';
import Note from '.';

describe('<Note />', () => {
  describe('renders a title', () => {
    it('scenario A', () => {
      const screen = render(<Note title="Note Title" />);

      expect(screen.getByText('Note Title')).toBeTruthy();
    });
    it('scenario B', () => {
      const screen = render(<Note title="Another Title" />);

      expect(screen.getByText('Another Title')).toBeTruthy();
    });
  });
  describe("renders the note's content", () => {
    it('scenario A', () => {
      const screen = render(<Note content="Note Content" />);

      expect(screen.getByText('Note Content')).toBeTruthy();
    });
    it('scenario B', () => {
      const screen = render(<Note content="Another Content" />);

      expect(screen.getByText('Another Content')).toBeTruthy();
    });
  });
});
