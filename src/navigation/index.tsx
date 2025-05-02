import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import App from './App';
import Auth from './Auth';
import {selectToken} from '../redux/slices/auth.slice';
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slices/app.slice';
import {colors} from '../theme';

export default function Navigation() {
  const token = useSelector(selectToken);
  const currentTheme = useSelector(selectTheme);
  const styles = StyleSheet.create({
    safeArea: {
      flex: 0,
      backgroundColor: colors[currentTheme].background,
    },
  });

  if (!token) {
    return (
      <>
        <Auth />
        <SafeAreaView style={styles.safeArea} />
      </>
    );
  }

  return (
    <>
      <App />
      <SafeAreaView style={styles.safeArea} />
    </>
  );
}
