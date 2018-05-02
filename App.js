/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Login from './App/Login'
import Navigator from './App/Navigator'
// import InterestedIn from './App/InterestedIn'
// import SkillShare from './App/SkillShare'
import InitStore from './App/Store/InitStore';
import {Provider} from 'react-redux';

export default class App extends Component<> {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            store: InitStore(() => this.setState({isLoading: false}))
        };
    }

  render() {
    return (
        <Provider store={this.state.store}>
        <Navigator/>
        </Provider>
    );
  }
}
