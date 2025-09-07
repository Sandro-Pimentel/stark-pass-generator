import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './PassInputStyles';

interface PassInputProps {
  pass: string;
}

export function PassInput(props: PassInputProps) {
  return (
    <TextInput
      placeholder='pass'
      style={styles.input}
      value={props.pass}
      readOnly={true}
      //multiline={true} habilita o 'Enter'
    />
  );
}