import React from 'react';
import {Text, View} from 'react-native';

const Note = ({title, content}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default Note;
