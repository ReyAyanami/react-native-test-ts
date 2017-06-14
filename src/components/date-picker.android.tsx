import React, {Component} from 'react'
import {
  Button,
  View
} from 'react-native'
import DogService from '../services/dog'

export default class DatePicker extends Component<{navigation: any}, {}> {
  render() {
    return (
      <View style={{marginTop: 10}}>
        <Button
          onPress={() => this.startCreateDog()}
          title='create new dog'
          color='#841584'
          accessibilityLabel='Learn more about this purple button'
        />

        <View style={{marginTop: 30}}>
          <Button
            onPress={() => this.deleteAllDogs()}
            title='delete all dog'
            color='#841584'
            accessibilityLabel='Learn more about this purple button'
          />
        </View>
      </View>
    )
  }

  private deleteAllDogs() {
    DogService.deleteAll()
  }

  private startCreateDog() {
    this.props.navigation.navigate('AddDog')
  }

}