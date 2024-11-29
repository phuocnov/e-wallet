/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { BackButton } from '@/components/molecules/DefaultError/BackButton';

function RequestTransactionScreen() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('ACB');

  const options = [
    { icon: 'ACBIcon', label: 'ACB', description: 'Miễn phí thanh toán' },
    { icon: 'TPIcon', label: 'TP', description: 'Miễn phí thanh toán' },
    {
      icon: 'AGRIBANKIcon',
      label: 'AGRIBANK',
      description: 'Miễn phí thanh toán',
    },
    {
      icon: 'BIDVIcon',
      label: 'BIDV',
      description: 'Miễn phí thanh toán',
    },
    {
      icon: 'MBBANKIcon',
      label: 'MBBANK',
      description: 'Miễn phí thanh toán',
    },
    {
      icon: 'VIETCOMBANKIcon',
      label: 'VIETCOMBANK',
      description: 'Miễn phí thanh toán',
    },
  ];

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
            <Text style={styles.titleText}>Nạp tiền vào</Text>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.inputLabel}>Nhập số tiền</Text>
                <TextInput keyboardType="numeric" style={styles.textInput} />
                <View style={styles.balanceContainer}>
                  <Text style={styles.balanceText}>Số dư: 300.000 VND</Text>
                  <Text>hideIcon</Text>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>Chọn nguồn tiền</Text>
              <ScrollView>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option.label}
                    style={styles.optionContainer}
                    onPress={() => setSelectedOption(option.label)}
                  >
                    <View style={styles.radioCircle}>
                      {selectedOption === option.label && (
                        <View style={styles.radioDot} />
                      )}
                    </View>
                    <View style={styles.optionContent}>
                      <View style={styles.optionTextContainer}>
                        <Text style={styles.optionLabel}>{option.label}</Text>
                        <Text style={styles.optionDescription}>
                          {option.description}
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.optionIcon}>{option.icon}</Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddBankLinkScreen');
                  }}
                  style={styles.optionContainer}
                >
                  <View style={styles.optionContent}>
                    <View style={styles.optionTextContainer}>
                      <Text style={styles.optionLabel}>
                        Thêm liên kết ngân hàng
                      </Text>
                      <Text style={styles.optionDescription}>
                        Liên kết ngân hàng có sẵn
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.optionIcon}>icon</Text>
                </TouchableOpacity>
              </ScrollView>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ConfirmTransaction');
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Nạp tiền</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

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
  },
  inputLabel: {
    fontSize: 14,
    color: '#5f94e4',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textInput: {
    height: 36,
    borderColor: '#5f94e4',
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
  },
  balanceContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 10,
  },
  balanceText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    height: 400,
    marginTop: 38,
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  radioDot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#007BFF',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionTextContainer: {
    marginRight: 10,
    flex: 1,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  optionIcon: {
    color: 'black',
    marginRight: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RequestTransactionScreen;
