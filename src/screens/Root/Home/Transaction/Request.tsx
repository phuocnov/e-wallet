/* eslint-disable react-native/no-inline-styles */
import { BackButton } from '@/components/molecules/DefaultError/BackButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, TextInput, View } from 'react-native';

function RequestTransactionScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#8C98AA',
      }}
    >
      <View
        style={{
          height: 30,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <BackButton />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginHorizontal: 16,
          marginTop: 32,
          backgroundColor: 'lightblue',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}
        >Nạp tiền vào</Text>
        <View
          style={{
            width: '100%',
            height: 135,
            flexDirection: 'column',
            borderRadius: 10,
            backgroundColor: '#d9d9d9',
            padding: 10,
            justifyContent: 'space-between',
          }} >
          <Text
            style={{
              fontSize: 14,
              color: '#5f94e4',
              fontWeight: 'bold',
            }}>
            Nhập số tiền</Text>
          <TextInput
            keyboardType="numeric"
            style={{
              height: 36,
              borderColor: '#5f94e4',
              borderWidth: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#5f94e4',
                fontWeight: 'bold',
              }}>
              Số dư: 300.000 VND</Text>
            <Text>hideIcon</Text>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
}

export default RequestTransactionScreen;
