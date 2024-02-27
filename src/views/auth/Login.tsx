import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignIn} from '../../redux/slices/auth.slice';
import Container from '../../components/Container';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const doLogin = () => {
    dispatch(setSignIn({token: '1234'}));
  };
  return (
    <Container>
      <Button title="Presiona para entrar" onPress={() => doLogin()} />
    </Container>
  );
}
