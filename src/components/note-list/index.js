import React from 'react';
import {Text, FlatList} from 'react-native';
import styled from 'styled-components/native';
import Note from '../note';
import {withData} from './withData';

const Box = styled.View`
  margin-bottom: 15px;
`;

const NoteList = ({data = []}) => {
  return data && data.length ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => {
        return (
          <Box>
            <Note title={item.title} note={item.note} />
          </Box>
        );
      }}
    />
  ) : (
    <Text>Carregando...</Text>
  );
};

const NoteListWithData = withData(NoteList);

export {NoteList, NoteListWithData};
