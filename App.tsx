import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PersistGate} from 'redux-persist/integration/react';
import dayjs from 'dayjs';
import Navigation from './src/navigation';
import {persistStore} from 'redux-persist';
import store from './src/redux/store';

dayjs.locale('es-mx');

let persistor = persistStore(store);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
