import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/app/Home';
import AboutScreen from '../views/app/About';
import SettingsScreen from '../views/app/Settings';
import {colors} from '../theme';
import {selectTheme} from '../redux/slices/app.slice';

export type HomeStackParamList = {
  Home: undefined;
  About: undefined;
  Settings: {
    id: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

const Tab = createBottomTabNavigator();

function TabBarIcon({focused, color, size, route}: any) {
  let iconName = '';

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'About') {
    iconName = focused ? 'help-circle' : 'help-circle-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
}

function BottomNavigation() {
  const currentTheme = useSelector(selectTheme);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          TabBarIcon({
            focused,
            color,
            size,
            route,
          }),
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors[currentTheme].active,
        tabBarInactiveTintColor: colors[currentTheme].inactive,
        tabBarActiveBackgroundColor: colors[currentTheme].background,
        tabBarInactiveBackgroundColor: colors[currentTheme].background,
        headerStyle: {
          backgroundColor: colors[currentTheme].background,
        },
        headerTitleStyle: {
          color: colors[currentTheme].text,
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{title: 'Inicio'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="About"
        options={{title: 'Acerca de'}}
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStack" component={BottomNavigation} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
