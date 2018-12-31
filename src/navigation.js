import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { name as appName } from '../app.json';

// eslint-disable-next-line
export async function changeToTabs() {
  const menuButton = {
    id: 'menu',
    icon: await Icon.getImageSource('menu', 30),
  };

  Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
    if (buttonId === 'menu') {
      // In v1 there was a toggleDrawer method
      Navigation.mergeOptions('menu', {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  });

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
        id: 'menu',
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
