import type { StackScreenProps } from '@react-navigation/stack';
import type { AuthPaths, Paths } from '@/navigations/paths';

export type RootStackParamList = {
  [Paths.Startup]: undefined;
  [Paths.Example]: undefined;
  [Paths.Root]: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
export type AuthStackParamList = {
  [AuthPaths.Onboarding]: undefined;
  [AuthPaths.Login]: undefined;
  [AuthPaths.Signup]: undefined;
};

export type AuthScreenProps<
  S extends keyof AuthStackParamList = keyof AuthStackParamList,
> = StackScreenProps<AuthStackParamList, S>;

export type TabParams = {
  Home: undefined;
  Promo: undefined;
  QRCode: undefined;
  History: undefined;
  Profile: undefined;
};
