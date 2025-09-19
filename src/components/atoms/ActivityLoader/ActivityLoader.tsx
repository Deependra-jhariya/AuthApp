import React from 'react';
import {View, ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import { AppColors } from '../../../themes';

interface ActivityLoaderProps {
  size?: 'small' | 'large';
  color?: string;
  style?: ViewStyle;
}

const ActivityLoader: React.FC<ActivityLoaderProps> = props => {
  const {size = 'large', color = AppColors.black, style} = props;
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default ActivityLoader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
