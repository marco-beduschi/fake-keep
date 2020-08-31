import React from 'react';
import {Formik} from 'formik';
import {View, Button, TextInput} from 'react-native';
import styled from 'styled-components/native';

const TextInputContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: black;
  margin-bottom: 20px;
`;

const NoteForm = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
    console.log(JSON.stringify(values));
    const response = await fetch('https://fake-keep-api.herokuapp.com/notes', {
      method: 'POST',
      body: JSON.stringify(values),
    });

    console.log(response);
  };

  return (
    <Formik initialValues={{title: '', note: ''}} onSubmit={handleFormSubmit}>
      {({handleSubmit, handleChange, values}) => (
        <View>
          <TextInputContainer>
            <TextInput
              placeholder="Title"
              onChangeText={handleChange('title')}
              value={values.title}
            />
          </TextInputContainer>
          <TextInputContainer>
            <TextInput
              placeholder="Note"
              onChangeText={handleChange('note')}
              value={values.note}
            />
          </TextInputContainer>

          <Button onPress={handleSubmit} title="salvar" />
        </View>
      )}
    </Formik>
  );
};

export default NoteForm;
