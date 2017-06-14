/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  AppRegistry,
} from 'react-native'

import Todo from './components/App';

export default class Index extends Component<{}, {}> {
  render() {
    return (
        <Todo />
    )
  }
}

AppRegistry.registerComponent('Index', () => Index)
