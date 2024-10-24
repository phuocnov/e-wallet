import React from 'react';
import { Controller } from 'react-hook-form';
import { View, StyleSheet, StyleProp } from 'react-native';
import { TextInput as RNTextInput } from 'react-native-gesture-handler';

export interface TextInputProps {
  control: any;
  name: string;
  placeholder: string;
  style?: any;
}

export default function TextInput(props: TextInputProps): JSX.Element {
  return <View>
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput
          onBlur={onBlur}
          onChangeText={onChange}
          placeholder={props.placeholder}
          style={props.style}
          value={value}
        />
      )}
    />
  </View>;
}
