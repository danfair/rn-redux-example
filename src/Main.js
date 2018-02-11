import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import MainNavigator from './navigators/MainNavigator';
import store from './store';

const routeProps = {};

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <MainNavigator
            ref={nav => { this.navigator = nav; }}
            screenProps={routeProps}
            // onNavigationStateChange={(previousState, currentState) => this.mainNavigationChange(previousState, currentState)}
          />
        </View>
      </Provider>
    );
  }
}

export default Main;