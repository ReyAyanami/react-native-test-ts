import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native'

import DogService from '../services/dog'

export default class CreateDogComponent extends Component<{navigation: any}, {dogName: string}> {
    static navigationOptions = {
        title: 'Create a dog!'
    }

    constructor(props) {
        super(props)
        this.state = {
            dogName: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.labelField}>Your dog's name:</Text>
                <TextInput
                    style={styles.inpuField}
                    onChangeText={(text) => {
                        this.setState(prevState => ({
                            ...prevState,
                            dogName: text
                        })
                    )}}
                />
                <Button
                    onPress={() => this.createDog()}
                    title='Create'
                    color='#841584'
                />
            </View>
        )
    }

    private createDog() {
        DogService.create({
            name: this.state.dogName,
            key: new Date().toDateString()
        })
        this.props.navigation.goBack()
    }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingLeft: 5,
    paddingRight: 5
  },
  labelField: {
      marginTop: 10
  },
  inpuField: {
    marginTop: 0
  }
})

AppRegistry.registerComponent('CreateDogComponent', () => CreateDogComponent)