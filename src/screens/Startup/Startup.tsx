import type { RootScreenProps } from '@/navigations/types';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

import { useTheme } from '@/theme';
import { Paths } from '@/navigations/paths';

import { Brand } from '@/components/molecules';
import { SafeScreen } from '@/components/templates';
import { useAppDispatch } from '@/reducers/hooks';
import { Login } from '@/reducers/authSlice';

function Startup({ navigation }: RootScreenProps<Paths.Startup>) {
  const { layout, gutters, fonts } = useTheme();
  const { t } = useTranslation();

  const { isSuccess, isFetching, isError } = useQuery({
    queryKey: ['startup'],
    queryFn: () => {
      return Promise.resolve(true);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigation.reset({
        index: 0,
        routes: [{ name: Paths.Example }],
      });
    }
  }, [isSuccess, navigation]);

  const dispatch = useAppDispatch();

  return (
    <SafeScreen>
      <View
        style={[
          layout.flex_1,
          layout.col,
          layout.itemsCenter,
          layout.justifyCenter,
        ]}
      >
        <Text>START UP</Text>
        <Button onPress={() => dispatch(Login({ password: '123', phonenumber: '23' }))} title="Go to Example" />
        <Brand />
      </View>
    </SafeScreen>
  );
}

export default Startup;
