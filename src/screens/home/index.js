import React from 'react';
import styled from 'styled-components/native';
import {NoteListWithData as NoteList} from '../../components/note-list';

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <NoteList />
    </Container>
  );
};

export default HomeScreen;
