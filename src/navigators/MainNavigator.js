import { StackNavigator, TabBarBottom, NavigationActions } from 'react-navigation';

import User from '../routes/User';
import Users from '../routes/Users';
import Repos from '../routes/Repos';
import Stars from '../routes/Stars';

export default StackNavigator({
  Home: {
    screen: Users,
    path: '/'
  },
  User: {
    screen: User,
    path: '/user'
  },
  Repos: {
    screen: Repos,
    path: '/repos'
  },
  Stars: {
    screen: Stars,
    path: '/stars'
  },
}, {
    headerMode: 'float',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: 'white'
      },
    }, 
    // navigationOptions: ({ navigation, screenProps }) => ({
    //   tabBarOnPress: (tab, jumpToIndex) => {
    //     if (tab.focused) { // if tab currently focused tab
    //       screenProps.subGoTo(tab.route.key, true);
    //     } else {
    //       screenProps.subGoTo(tab.route.key, false);
    //       jumpToIndex(tab.index) // go to another tab (the default behavior)
    //     }
    //   }
    // })
  });