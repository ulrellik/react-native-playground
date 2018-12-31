import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import configureStore from './src/store/configureStore';
import AuthScreen from './src/screens/AuthScreen';
import SharePlaceScreen from './src/screens/SharePlaceScreen';
import FindPlaceScreen from './src/screens/FindPlaceScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import SideMenuScreen from './src/screens/SideMenuScreen';

const store = configureStore();

Navigation.registerComponentWithRedux(`${appName}.AuthScreen`, () => AuthScreen, Provider, store);
Navigation.registerComponent(`${appName}.SideMenuScreen`, () => SideMenuScreen);
Navigation.registerComponentWithRedux(`${appName}.SharePlaceScreen`, () => SharePlaceScreen, Provider, store);
Navigation.registerComponentWithRedux(`${appName}.FindPlaceScreen`, () => FindPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux(`${appName}.ItemDetailsScreen`, () => ItemDetailsScreen, Provider, store);


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: `${appName}.AuthScreen`,
          },
        }],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
          },
        },
      },
    },
  });
});
