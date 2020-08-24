import React from 'react';
import Note from '../../components/note';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const NOTES = [
  {title: 'Note 1', content: 'Note Content 1'},
  {title: 'Note 2', content: 'Note Content 2'},
  {title: 'Note 3', content: 'Note Content 3'},
  {title: 'Note 4', content: 'Note Content 4'},
  {title: 'Note 5', content: 'Note Content 5'},
];

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const Box = styled.View`
  margin-bottom: 15px;
`;

const HomeScreen = () => {
  return (
    <Container>
      <FlatList
        data={NOTES}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => {
          return (
            <Box testID="note">
              <Note title={item.title} content={item.content} />
            </Box>
          );
        }}
      />
    </Container>
  );
};

export default HomeScreen;
