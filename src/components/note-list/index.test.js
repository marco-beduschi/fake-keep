import React from 'react';
import {render} from '@testing-library/react-native';
import {NoteList, NoteListWithData} from '.';

describe('<NoteList />', () => {
  describe('without data', () => {
    it('renders a loading message', () => {
      const screen = render(<NoteList />);

      expect(screen.queryByText('Carregando...')).toBeTruthy();
    });
  });

  describe('with data', () => {
    it('renders a list of notes', () => {
      const data = [
        {_id: '1', title: 'Note 1', note: 'Note 1 Content'},
        {_id: '2', title: 'Note 2', note: 'Note 2 Content'},
        {_id: '3', title: 'Note 3', note: 'Note 3 Content'},
        {_id: '4', title: 'Note 4', note: 'Note 4 Content'},
        {_id: '5', title: 'Note 5', note: 'Note 5 Content'},
      ];
      const screen = render(<NoteList data={data} />);

      expect(screen.queryByText('Note 1')).toBeTruthy();
      expect(screen.queryByText('Note 2')).toBeTruthy();
      expect(screen.queryByText('Note 3')).toBeTruthy();
      expect(screen.queryByText('Note 4')).toBeTruthy();
      expect(screen.queryByText('Note 5')).toBeTruthy();
    });
  });
});
