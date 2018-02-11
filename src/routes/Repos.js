import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRepos } from '../actions/repoActions';

class Repos extends Component {
  componentDidMount() {
    this.props.getRepos(this.props.navigation.state.params.user.login);
  }

  render() {
    return (
      <View>
        <Text>Repos by {this.props.navigation.state.params.user.login}</Text>
        {this.props.repos.reposList.map((repo) => {
          return <Text key={repo.full_name}>{repo.full_name} - {repo.description}</Text>
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  repos: state.repos
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getRepos
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repos)