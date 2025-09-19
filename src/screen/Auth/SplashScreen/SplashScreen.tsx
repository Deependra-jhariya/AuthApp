import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { AppColors } from '../../../themes';
import { useAppNavigation } from '../../../utils/navigationHelper';

const SplashScreen = () => {
  const { replaceTo } = useAppNavigation();

  useEffect(() => {
    setTimeout(() => {
      replaceTo('LoginScreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        Welcome to Firebase authentication.
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 20,
    color: AppColors.black,
  },
});
