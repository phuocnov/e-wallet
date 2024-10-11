import React from 'react';
import type { ControllerProps } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';
import { TextInput as RNTextInput } from 'react-native-gesture-handler';

export interface TextInputProps {
  control: ControllerProps;
  name: string;
  placeholder: string;
}

export default function TextInput(props: TextInputProps): JSX.Element {
  return <View>
    <Controller
      control={props.control.control}
      name={props.name}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput
          onBlur={onBlur}
          onChangeText={onChange}
          placeholder={props.placeholder}
          value={value} />
      )}
    />
  </View>;
}
