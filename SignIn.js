import React from 'react';
import { ImageBackground, TextInput, Button, StyleSheet, Text, View } from 'react-native';

import { Auth } from 'aws-amplify'

import SignIn from './SignIn'
import SignUp from './SignUp'

export default class App extends React.Component {
  state = {
    username: '',
    password: 'Qwerty-123',
    phone_number: '',
    confirmationCode: '',
    user: {}
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  signIn() {
    const { username, password } = this.state
    Auth.signIn(username, password)
    .then(user => {
      this.setState({ user })
      console.log('successful sign in!')
    })
    .catch(err => console.log('error signing in!: ', err))
  }
  confirmSignIn() {
    Auth.confirmSignIn(this.state.user, this.state.confirmationCode)
    .then(() => {
      console.log('successful confirm sign in!')
      this.props.screenProps.authenticate(true)
      console.log('username: ', Auth.user.username)

    })
    .catch(err => console.log('error confirming signing in!: ', err))
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText('username', value)}
          style={styles.input}
          placeholder='username'
          placeholderTextColor='grey'
        />
        {/* <TextInput
          onChangeText={value => this.onChangeText('password', value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder='password'
        /> */}
        <Button title="Sign In" onPress={this.signIn.bind(this)} />

         <Text style={styles.signupText}>
        Not a member yet?
        </Text>
        <Button 
          title="Sign Up Here!" 
          onPress={ () => this.props.navigation.navigate('SignUp')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#111111',
    margin: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  signupText: {
    paddingTop: 150,
    //flex: 1,
    textAlign: 'center',
  },
});
