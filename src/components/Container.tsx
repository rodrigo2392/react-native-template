import React, {ReactElement} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Container({
  children,
  scroll,
}: {
  children: ReactElement | ReactElement[];
  scroll?: boolean;
}) {
  const styles = StyleSheet.create({
    main: {
      width,
      paddingLeft: width * 0.05,
      paddingRight: width * 0.05,
      height,
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
