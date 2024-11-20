
import Button from '@/components/atoms/Button';
import TextInput from '@/components/atoms/TextInput';
import { SafeScreen } from '@/components/templates';
import useBiometricAuth from '@/hooks/biomertricAuth';
import useLoginForm from '@/hooks/forms/useLoginForm';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SignUpScreen() {
  const { control, errors, handleSubmit, onSubmit } = useLoginForm();
  const { createSignature } = useBiometricAuth();

  //TODO: add navigation
  const handleGotoSignup = () => { };
  const handleForgotPassword = () => { };

  return (
    <SafeScreen style={{
      display: 'flex',
      alignItems: 'center',
      marginTop: 120,
    }}>
      <Text style={styles.title}>Sign up</Text>

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

      <View style={{ marginVertical: 20 }}>
        <Text style={{
          color: '#5F94E4',
          fontWeight: 'bold',
        }} onPress={handleForgotPassword}>Forgot password?</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>Don't have an account?</Text>
          <Text style={{
            color: '#5F94E4',
            fontWeight: 'bold',
          }} onPress={handleGotoSignup}> Sign up</Text>
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Button ButtonStyles={{
          width: 250,
        }} onPress={handleSubmit(onSubmit)} title="Login" />
      </View>
      <Button ButtonStyles={{
        width: 250,
      }} onPress={() => createSignature()} title="Login with FaceID" />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: 'flex',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 120,
    color: '#5F94E4',

  },
  textInput: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    width: 250
  },

  errorMessage: {
    color: 'red',
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 4,
  }
});

export default SignUpScreen;
