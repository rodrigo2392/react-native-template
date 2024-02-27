import React, {ReactElement} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {colors} from '../theme';
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slices/app.slice';

const {width, height} = Dimensions.get('window');

export default function Container({
  children,
  scroll,
}: {
  children: ReactElement | ReactElement[];
  scroll?: boolean;
}) {
  const currentTheme = useSelector(selectTheme);
  const styles = StyleSheet.create({
    main: {
      width,
      paddingLeft: width * 0.05,
      paddingRight: width * 0.05,
      height,
      backgroundColor: colors[currentTheme].background,
      paddingTop: 40,
    },
    scrollContainer: {
      height,
      paddingBottom: 180,
    },
  });
  if (scroll) {
    return (
      <View style={styles.main}>
        <View style={styles.scrollContainer}>
          <ScrollView bounces={false} overScrollMode="never">
            {children}
          </ScrollView>
        </View>
      </View>
    );
  }
  return <View style={styles.main}>{children}</View>;
}
