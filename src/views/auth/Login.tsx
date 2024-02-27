import React from 'react';
import {useDispatch} from 'react-redux';
import {setSignIn} from '../../redux/slices/auth.slice';
import Container from '../../components/Container';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const doLogin = () => {
    dispatch(setSignIn({token: '1234'}));
  };
  return (
    <Container>
      <Button onPress={() => doLogin()}>
        <Text buttonText>Presiona para entrar</Text>
      </Button>
    </Container>
  );
}
