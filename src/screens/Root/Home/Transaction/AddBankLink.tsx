import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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

const AddBankLinkScreen = () => {
  const navigation = useNavigation();
  const options = [
    { icon: 'ACBIcon', label: 'ABC', description: 'Ngân hàng Á Châu Việt Nam' },
    { icon: 'ACBIcon', label: 'TP', description: 'Ngân hàng Á Châu Việt Nam' },
    {
      icon: 'ACBIcon',
      label: 'AGRIBANK',
      description: 'Ngân hàng Á Châu Việt Nam',
    },
    {
      icon: 'ACBIcon',
      label: 'BIDV',
      description: 'Ngân hàng Á Châu Việt Nam',
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
            <Text style={styles.titleText}>Liên Kết Ngân Hàng</Text>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.inputLabel}>Ngân hàng</Text>
                <TextInput keyboardType="default" style={styles.textInput} />
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.title}>Toàn bộ ngân hàng</Text>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.label}
                  style={styles.optionContainer}
                  onPress={() => {
                    navigation.navigate('RequestBankLinkScreen');
                  }}
                >
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
            </View>
          </View>
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
    marginBottom: 8,
  },
  textInput: {
    height: 36,
    borderColor: '#5f94e4',
    borderRadius: 4,
    borderWidth: 1,
  },
  container: {
    width: '100%',
    height: 400,
    marginTop: 38,
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    padding: 10,
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
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
  },
  optionIcon: {
    color: 'black',
    marginRight: 12,
  },
});
export default AddBankLinkScreen;
