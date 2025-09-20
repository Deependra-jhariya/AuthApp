import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  View,
  StyleProp,
} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import { AppColors } from '../../../themes';

interface AppButtonProps {
  text: String;
  style?: StyleProp<ViewStyle>;
  onSubmit?: () => void;
  disabled?: boolean;
  showNumber?: boolean;
  ButtonTextStyle?: TextStyle;
  isButtonIcon?: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = props => {
  const {
    text,
    style,
    onSubmit,
    disabled,
    showNumber,
    ButtonTextStyle,
    isButtonIcon,
  } = props;

  return (
    <TouchableOpacity
      style={[styles?.buttonView, style]}
      onPress={onSubmit}
      disabled={disabled ? true : false}
    >
      <View style={styles?.textViewStyle}>
        {isButtonIcon && (
          <View style={styles?.iconViewStyle}>{isButtonIcon}</View>
        )}
        <AppText text={text} style={[styles?.textStyle, ButtonTextStyle]} />
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: AppColors.appColor,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 9,
    margin: 16,
  },
  textViewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textStyle: {
    textAlign: 'center',
    color: AppColors.white,
    fontSize: 16,
    // fontFamily: AppFontFamily.Regular,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  iconViewStyle: {
    alignSelf: 'center',
    marginRight: 5,
    justifyContent: 'center',
  },
});
