import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {colors} from '../theme';
import Text from './Text';
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slices/app.slice';

const {width} = Dimensions.get('screen');

export default function ThemeButtom({
  children,
  onPress,
  testID,
}: {
  children: string | ReactElement;
  onPress?: () => void;
  testID?: string;
}) {
  const currentTheme = useSelector(selectTheme);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors[currentTheme].button,
      paddingVertical: 10,
      width: width * 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,
    },
  });
  return (
    <TouchableOpacity
      testID={testID}
      style={styles.container}
      onPress={onPress}>
      <Text bold color={colors[currentTheme].buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
