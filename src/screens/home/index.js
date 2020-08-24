import React from 'react';
import Note from '../../components/note';
import {FlatList, View} from 'react-native';

const NOTES = [
  {title: 'Note 1', content: 'Note Content 1'},
  {title: 'Note 2', content: 'Note Content 2'},
  {title: 'Note 3', content: 'Note Content 3'},
  {title: 'Note 4', content: 'Note Content 4'},
  {title: 'Note 5', content: 'Note Content 5'},
];
const Home = () => {
  return (
    <FlatList
      data={NOTES}
      keyExtractor={(item) => item.title}
      renderItem={({item}) => {
        return (
          <View testID="note">
            <Note title={item.title} content={item.content} />
          </View>
        );
      }}
    />
  );
};

export default Home;
