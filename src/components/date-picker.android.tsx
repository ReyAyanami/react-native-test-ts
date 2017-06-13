import React, {Component} from 'react'
import {
  Button,
  View
} from 'react-native'
import DogService from '../services/dog'

export default class DatePicker extends Component<{}, {}> {
  private deleteAllDogs() {
    DogService.deleteAll()
  }

  private createDog() {
    DogService.create({
      name: 'some',
      key: new Date().toDateString()
    })
  }

  render() {
    return (
      <View>
        <Button
          onPress={() => this.createDog()}
          title="create new dog"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.deleteAllDogs()}
          title="delete all dog"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}