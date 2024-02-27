import React from 'react';
import App from './App';
import Auth from './Auth';
import {selectToken} from '../redux/slices/auth.slice';
import {useSelector} from 'react-redux';

export default function Navigation() {
  const token = useSelector(selectToken);

  if (!token) {
    return <Auth />;
  }

  return <App />;
}
