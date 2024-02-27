import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../navigation/App';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default function SettingScreen() {
  const navigate = useNavigation<HomeScreenNavigationProp>();
  return (
    <Container>
      <Text>Contacto: itic.rodrigo@gmail.com</Text>
      <Button onPress={() => navigate.navigate('Settings', {id: '123'})}>
        <Text buttonText>Configuración</Text>
      </Button>
    </Container>
  );
}
