/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';

function Home1() {
  // TODO: Replace Hide with icons and  make it clickable
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#8C98AA',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
          color: 'black',
        }}
      >
        HomeScreen
      </Text>
      <View
        style={{
          width: '80%',
          height: 135,
          borderRadius: 10,
          backgroundColor: '#d9d9d9',
          padding: 10,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              fontWeight: 'semibold',
            }}
          >
            Số dư
          </Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
            }}
          >
            <Text>800,000 VND</Text>
            <Text>Hide</Text>
          </View>
        </View>

        <View>
          <ButtonList />
        </View>
      </View>
    </View>
  );
}

const ButtonList = () => {
  const navigation = useNavigation();
  //TODO: Add icons
  const buttonList = [
    {
      title: 'Nạp tiền',
      onPress: () => {
        navigation.navigate('TransactionRoot');
      },
    },
    {
      title: 'Rút tiền',
      onPress: () => {},
    },
    {
      title: 'Chuyển tiền',
      onPress: () => {},
    },
    {
      title: 'QR thanh toán',
      onPress: () => {},
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}
    >
      {buttonList.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            item.onPress();
          }}
          style={{
            alignItems: 'center',
            display: 'flex',
            width: 48,
            gap: 4,
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              backgroundColor: 'white',
            }}
          />
          <Text style={{ fontSize: 8, textAlign: 'center' }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home1;
