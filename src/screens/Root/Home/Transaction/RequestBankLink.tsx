import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { BackButton } from '@/components/molecules/DefaultError/BackButton';

const RequestBankLinkScreen = () => {
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

          <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Liên Kết Ngân Hàng</Text>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.inputLabel}>Số thẻ/Tài khoản</Text>
                <TextInput
                  placeholder="Nhập số thẻ/Tài khoản"
                  placeholderTextColor={'#bbb7b7'}
                  keyboardType="numeric"
                  style={styles.textInput}
                />
              </View>
              <View>
                <Text style={styles.inputLabel}>Chủ thẻ/Tài khoản</Text>
                <TextInput
                  placeholder="Nhập tên Chủ thẻ/Tài khoản"
                  placeholderTextColor={'#bbb7b7'}
                  keyboardType="default"
                  style={styles.textInput}
                />
              </View>
              <View>
                <Text style={styles.inputLabel}>Mã bảo mật</Text>
                <TextInput
                  placeholder="Nhập mã bảo mật"
                  placeholderTextColor={'#bbb7b7'}
                  keyboardType="numeric"
                  style={styles.textInput}
                />
              </View>
              <View>
                <Text style={styles.inputLabel}>Ngày hết hạn</Text>
                <TextInput
                  placeholder="Ngày hết hạn"
                  placeholderTextColor={'#bbb7b7'}
                  keyboardType="default"
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OTPTransactionScreen');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Tiếp tục</Text>
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
  mainContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginTop: 32,
  },
  titleText: {
    marginLeft: 8,
    marginBottom: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    width: '100%',
    height: 'auto',
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    padding: 10,
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#5f94e4',
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 12,
  },
  textInput: {
    height: 36,
    borderColor: '#5f94e4',
    borderRadius: 4,
    borderWidth: 1,
    color: 'black',
    backgroundColor: 'white',
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

export default RequestBankLinkScreen;
