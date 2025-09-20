import { StyleSheet } from 'react-native';
import { AppColors, AppFontFamily } from '../../../themes';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    alignSelf: 'center',
    fontFamily: AppFontFamily.Bold,
    marginBottom: 20,
  },
  LoginBtn: {
    marginTop: 50,
    backgroundColor: AppColors.lightGreen,
  },
  btntext: {
    fontFamily: AppFontFamily.Bold,
  },
  createAccount: {
    alignSelf: 'flex-end',
    color: AppColors.black,
    fontFamily: AppFontFamily.Regular,
    fontSize: 15,
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    marginRight: 16,
    marginTop: 10,
    fontSize: 15,
    color: AppColors.lightGreen,
    fontFamily: AppFontFamily.Regular,
  },
  googleLoginView: {
    justifyContent: 'flex-end',
  },
  googleLoginBtn: {
    backgroundColor: AppColors.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: AppColors.grayColor,
  },
  googleLoginText: {
    color: AppColors.black,
    fontFamily: AppFontFamily.Regular,
    fontSize: 15,
  },
  btnIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});
