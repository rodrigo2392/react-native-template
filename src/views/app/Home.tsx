import * as React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import 'dayjs/locale/es-mx';
import Container from '../../components/Container';
import {Button} from 'react-native';
import {setSignOut} from '../../redux/slices/auth.slice';
import {useDispatch} from 'react-redux';
dayjs.extend(relativeTime);
dayjs.locale('es-mx');

export default function HomeScreen() {
  const dispatch = useDispatch();
  const doLogout = () => {
    console.log('test');
    dispatch(setSignOut());
  };
  return (
    <Container>
      <Text>
        Faltan {dayjs(`${new Date().getFullYear()}-12-25`).fromNow(true)} para
        navidad
      </Text>
      <Button title="Cerrar sesión" onPress={() => doLogout()} />
    </Container>
  );
}
