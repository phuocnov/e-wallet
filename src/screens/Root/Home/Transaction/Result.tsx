import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ResultTransactionScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View
          style={{
            height: 'auto',
            width: 'auto',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'lightblue',
            }}
          ></View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 36,
              marginBottom: 20,
            }}
          >
            NẠP TIỀN THÀNH CÔNG
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
            Thời gian giao dịch
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
            }}
          >
            20:55:21 20/08/2023
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingVertical: 16,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Mã giao dịch
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: 'italic',
            }}
          >
            T39HAIE739490
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.bgButton}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'HomePage' }] })}
        >
          <Text style={styles.buttonText}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bgButton}
          onPress={() => {
            // HistoryScreen
            navigation.navigate('History');
          }}
        >
          <Text style={styles.buttonText}>Lịch sử GD</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#8C98AA',
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
  buttonContainer: {
    height: 'auto',
    width: 'auto',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    marginBottom: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  bgButton: {
    fontSize: 16,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 8,
    marginTop: 16,
  },
});

export default ResultTransactionScreen;
