import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AppColors, AppImages } from '../../../themes';
import { AppButton, AppInput, AppText } from '../../../components/atoms/index';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../../redux/feature/Auth/AuthApi';
import { AppDispatch } from '../../../redux/store';
import { useAppNavigation } from '../../../utils/navigationHelper';
const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { navigateTo } = useAppNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleSignUp = async () => {
    try {
      const response = await dispatch(signupUser({ email, password })).unwrap();

      console.log('Sign up successfully');
    } catch (error) {
      console.log('Signup failed.', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <AppText text={'Signup'} style={{ alignSelf: 'center' }} />
        <AppInput
          label="Email"
          value={email}
          placeholder="Enter you email."
          onChangeText={text => setEmail(text)}
        />
        <AppInput
          label="Password"
          value={password}
          placeholder="Enter you Password."
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <AppButton
          text={'Signup'}
          style={styles.LoginBtn}
          onSubmit={handleSignUp}
        />

        <TouchableOpacity
          onPress={() => {
            navigateTo('LoginScreen');
          }}
        >
          <AppText text={'Back to Login'} style={styles.backLogin} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  LoginBtn: {
    marginTop: 20,
  },
  backLogin: {
    fontSize: 15,
    color: AppColors.appColor,
    alignSelf: 'center',
    marginTop: 10,
  },
});
