import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAllUsers } from '../actions/usersActions';

class Users extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Users</Text>
        {this.props.users.map((user) => {
          return <Button key={user.username} onPress={() => this.props.navigation.navigate('User', { user })} title={ user.name + ' (' + user.username + ')'}></Button>
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUsers
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)