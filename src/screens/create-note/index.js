import React from 'react';
import {SafeAreaView, TextInput, View, Button} from 'react-native';
import {Formik} from 'formik';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 40px 20px;
`;

const TextInputContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: black;
  margin-bottom: 20px;
`;

export const CreateNoteScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <Formik
          initialValues={{title: '', content: ''}}
          onSubmit={(values) => console.log(values)}>
          {({handleChange, values}) => (
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
                  onChangeText={handleChange('content')}
                  value={values.content}
                />
              </TextInputContainer>

              <Button onPress={() => console.log(values)} title="salvar" />
            </View>
          )}
        </Formik>
      </Container>
    </SafeAreaView>
  );
};
