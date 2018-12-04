import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
            title: {
              text: 'Welcome screen',
            },
          },
        },
      },
    },
  });
});

// eslint-disable-next-line
export async function changeToTabs() {
  const menuButton = {
    id: 'menu',
    icon: await Icon.getImageSource('menu', 30),
  };

  const findScreen = { stack: {
    children: [
      { component: {
        name: `${appName}.FindPlaceScreen`,
        options: {
          bottomTab: {
            text: 'Find Place',
            icon: await Icon.getImageSource('map', 30),
          },
          topBar: {
            title: {
              text: 'Select a place',
            },
            leftButtons: [menuButton],
          },
        },
      } },
    ],
  } };

  const shareScreen = { stack: {
    children: [
      { component: {
        name: `${appName}.SharePlaceScreen`,
        options: {
          bottomTab: {
            text: 'Share Place',
            icon: await Icon.getImageSource('share', 30),
          },
          topBar: {
            title: {
              text: 'Add a place',
            },
            leftButtons: [menuButton],
          },
        },
      } },
    ],
  } };

  // const shareScreen = { component: {
  //   name: `${appName}.SharePlaceScreen`,
  //   options: {
  //     bottomTab: {
  //       text: 'Share Place',
  //       icon: await Icon.getImageSource('share', 30),
  //     },
  //     topBar: {
  //       leftButtons: [menuButton],
  //     },
  //   },
  // } };

  Navigation.setRoot({ root: { sideMenu: {
    left: {
      component: {
        name: `${appName}.SideMenuScreen`,
      },
    },
    center: { bottomTabs: {
      children: [
        findScreen,
        shareScreen,
      ],
    } },
    // right: {
    //   component: {},
    // },
  } } });
}
