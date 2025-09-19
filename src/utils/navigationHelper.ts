import {
  useNavigation,
  NavigationProp,
  StackActions,
} from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateTo = (screen: keyof RootStackParamList, params?: any) => {
    navigation.navigate(screen, params);
  };

  const resetTo = (screen: keyof RootStackParamList, params?: any) => {
    navigation.reset({
      index: 0,
      routes: [{ name: screen, params }],
    });
  };

  const replaceTo = (screen: keyof RootStackParamList, params?: any) => {
    navigation.dispatch(StackActions.replace(screen, params));
  };

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return { navigateTo, replaceTo, resetTo, goBack };
};
