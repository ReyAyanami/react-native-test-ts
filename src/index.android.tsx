/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import DatePicker from './components/date-picker.android'
import DogService from './services/dog'
import DogModel from './models/dog'
import {Collection} from 'realm'
import DefaultRepository from './repository/default'

class DogComponent extends Component<{ dog: any }, {}> {
  render() {
    return (
      <View>
        <Text>{this.props.dog.name}</Text>
      </View>
    )
  }
}

export default class Todo extends Component<{}, { dogs: Collection<DogModel>, counter: number, uniq: number }> {

  constructor(props) {
    super(props)

    this.state = {
      dogs: DogService.getAll(),
      counter: 0,
      uniq: 0
    }

    DefaultRepository.get()
                     .addListener('change', () => this.refresh())
  }

  private refresh() {
    // Dogs length was not changed, but it had to
    console.log("dogs: " + DogService.getAll().length);
    this.setState(prevState => ({
      ...prevState, uniq: prevState.uniq + 1
    })) 
  }

  private blah() {
    this.setState(prevState => ({
      ...prevState,
      counter: prevState.counter + 1
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Simple Counter: {this.state.counter}
        </Text>
        <Text style={styles.instructions}>
          Count of Dogs in Realm: {this.state.dogs.length}
        </Text>

        {this.state.dogs.map(it => <DogComponent dog={it}/>)}

        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button
          onPress={() => this.blah()}
          title="blah"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <DatePicker/>
      </View>
    )
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('Todo', () => Todo)
