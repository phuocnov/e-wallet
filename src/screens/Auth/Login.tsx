import Button from '@/components/atoms/Button';
import TextInput from '@/components/atoms/TextInput';
import { SafeScreen } from '@/components/templates';
import useBiometricAuth from '@/hooks/biomertricAuth';
import useLoginForm from '@/hooks/forms/useLoginForm';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function LoginScreen() {
  const { control, errors, handleSubmit, onSubmit } = useLoginForm();
  const { createSignature } = useBiometricAuth();
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>

        {/* Custom TextInput Component */}
        <TextInput
          control={control}
          name="emailOrPhonenumber"
          placeholder="Username"
          style={styles.textInput}
        />
        {errors.emailOrPhonenumber && <Text style={styles.errorMessage}>{errors.emailOrPhonenumber.message}</Text>}

        <TextInput
          control={control}
          name="password"
          placeholder="Password"
          style={styles.textInput}
        />
        {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

        <Button onPress={handleSubmit(onSubmit)} title="Login" />

        <Button onPress={() => createSignature()} title="Login with FaceID" />
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },

  errorMessage: {
    color: 'red',
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 4,
  }
});

export default LoginScreen;
