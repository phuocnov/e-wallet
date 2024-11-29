import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

import { BackButton } from '@/components/molecules/DefaultError/BackButton';

const OTPTransactionScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <BackButton />
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Nhập mã OTP</Text>
            <OtpInput
              focusColor="#007cff"
              numberOfDigits={6}
              onTextChange={(text) => console.log(text)}
              theme={{
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
              }}
            />
            <Text
              style={{
                color: 'black',
                marginVertical: 8,
              }}
            >
              xác nhận trong 99s
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ResultTransactionScreen');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Nạp tiền</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#8C98AA',
  },
  headerContainer: {
    height: 30,
    marginTop: 10,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    width: 'auto',
    height: 'auto',
    marginHorizontal: 16,
    marginTop: 38,
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    textAlign: 'center',
    marginBottom: 16,
  },
  pinCodeContainer: {
    backgroundColor: 'white',
  },
  pinCodeText: {
    color: 'black',
  },
  button: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default OTPTransactionScreen;
