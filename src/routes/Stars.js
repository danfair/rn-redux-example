import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getStarred } from '../actions/starActions';

class Stars extends Component {
  componentDidMount() {
    this.props.getStarred(this.props.navigation.state.params.user.login);
  }
  render() {
    return (
      <View>
        <Text>Stars by {this.props.navigation.state.params.user.login}</Text>
        {this.props.stars.starsList.map((repo) => {
          return <Text key={repo.full_name}>{repo.full_name} - {repo.description}</Text>
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  stars: state.stars
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getStarred
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stars)