import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { BackButton } from '@/components/molecules/DefaultError/BackButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmTransactionScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <BackButton />
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#d9d9d9',
          height: 'auto',
          borderRadius: 10,
          marginHorizontal: 16,
          marginTop: 32,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderBottomWidth: 0.5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Dịch vụ
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
            }}
          >
            Nạp tiền vào ví điện tử
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderBottomWidth: 0.5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Nguồn tiền
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
            }}
          >
            ABC Ngân Hàng Á Châu
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 16,
            borderBottomWidth: 0.5,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Số tiền
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
            }}
          >
            300,000 VND
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Phí dịch vụ
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
            }}
          >
            0 VND
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OTPTransactionScreen');
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Nạp tiền</Text>
      </TouchableOpacity>
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

export default ConfirmTransactionScreen;
