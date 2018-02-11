import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getUser } from '../actions/userActions';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.navigation.state.params.user.username);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {this.props.isLoading &&
          <h1>Loading...</h1>
        }
        {this.props.user && this.props.user.userData &&
          <View>
            <Text>{this.props.user.userData && this.props.user.userData.login} - {this.props.user.userData.location}</Text>
            <Button onPress={() => this.props.navigation.navigate('Repos', { user: this.props.user.userData })} title={'See ' + this.props.user.userData.name + ' Repos'} />
            <Button onPress={() => this.props.navigation.navigate('Stars', { user: this.props.user.userData })} title={'See ' + this.props.user.userData.name + ' Stars'} />
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)