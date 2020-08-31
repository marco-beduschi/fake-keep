import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NoteForm from '.';

describe('<NoteForm />', () => {
  it('has a title field', () => {
    const screen = render(<NoteForm />);

    expect(screen.queryByPlaceholderText('Title')).toBeTruthy();
  });
  it('has a note field', () => {
    const screen = render(<NoteForm />);

    expect(screen.queryByPlaceholderText('Note')).toBeTruthy();
  });

  it('has a submit button', () => {
    const screen = render(<NoteForm />);

    expect(screen.queryByText('salvar')).toBeTruthy();
  });
});
