import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native'

export default class CreateDogComponent extends Component<{}, {}> {
    static navigationOptions = {
        title: 'Create a dog!'
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Create dog</Text>
            </View>
        )
    }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

AppRegistry.registerComponent('CreateDogComponent', () => CreateDogComponent)