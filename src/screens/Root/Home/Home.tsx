/* eslint-disable react-native/no-inline-styles */
import { useAppSelector } from '@/reducers/hooks';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { Text, TouchableOpacity, View } from 'react-native';

function Home() {
  const { user, wallets } = useAppSelector(state => state.AuthSlice)
  // TODO: Replace Hide with icons and  make it clickable
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#8C98AA',
        alignItems: 'center',
      }}
    >
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
            <BalanceList />
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
      onPress: () => { },
    },
    {
      title: 'Chuyển tiền',
      onPress: () => { },
    },
    {
      title: 'QR thanh toán',
      onPress: () => { },
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


const BalanceList = () => {

  const { wallets } = useAppSelector(state => state.AuthSlice)
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          fontWeight: 'semibold',
        }}
      >
        Danh sách số dư
      </Text>
      {wallets?.map((wallet, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>{wallet.currency}</Text>
          <Text>{wallet.balance}</Text>
        </View>
      ))}
    </View>
  );
}
export default Home;
