import * as React from 'react';
import dayjs from 'dayjs';
import {useDispatch} from 'react-redux';
import relativeTime from 'dayjs/plugin/relativeTime';
import Text from '../../components/Text';
import Container from '../../components/Container';
import {setSignOut} from '../../redux/slices/auth.slice';
import Button from '../../components/Button';
import 'dayjs/locale/es-mx';

dayjs.extend(relativeTime);

export default function HomeScreen() {
  const dispatch = useDispatch();
  const doLogout = () => {
    dispatch(setSignOut());
  };
  return (
    <Container>
      <Text>
        Faltan {dayjs(`${new Date().getFullYear()}-12-25`).fromNow(true)} para
        navidad
      </Text>

      <Button onPress={() => doLogout()}>
        <Text buttonText>Cerrar sesión</Text>
      </Button>
    </Container>
  );
}
