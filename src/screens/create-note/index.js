import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import NoteForm from '../../components/note-form';

const Container = styled.View`
  padding: 40px 20px;
`;

export const CreateNoteScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <NoteForm />
      </Container>
    </SafeAreaView>
  );
};
