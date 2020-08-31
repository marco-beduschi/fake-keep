import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../constants/colors';
import {Paragraph, H4} from '../typography';

const Card = styled.View`
  border: 1px;
  background-color: white;
  border-color: ${COLORS['light-4']};
  padding: 15px;
`;

const Note = ({title, note}) => {
  return (
    <Card>
      <H4>{title}</H4>
      <Paragraph>{note}</Paragraph>
    </Card>
  );
};

export default Note;
