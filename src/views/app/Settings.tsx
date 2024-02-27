import * as React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../navigation/App';
import Container from '../../components/Container';
import Text from '../../components/Text';

export default function SettingScreen() {
  const navigate = useNavigation<HomeScreenNavigationProp>();
  return (
    <Container>
      <Text>Pantalla de configuración</Text>
      <Button title="Atras" onPress={() => navigate.goBack()} />
    </Container>
  );
}
