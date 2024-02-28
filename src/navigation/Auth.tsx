import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../views/auth/Login';
import {useSelector} from 'react-redux';
import {selectTheme} from '../redux/slices/app.slice';
import {colors} from '../theme';

const Stack = createNativeStackNavigator();

export default function App() {
  const currentTheme = useSelector(selectTheme);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors[currentTheme].background,
          },
          headerTitleStyle: {
            color: colors[currentTheme].text,
          },
        }}>
        <Stack.Screen
          name="Login"
          options={{title: 'Iniciar sesión'}}
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
