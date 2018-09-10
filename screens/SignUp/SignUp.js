import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, Image } from 'react-native';

import { Auth } from 'aws-amplify'

import SignIn from '../Login/SignIn'
import SignUp from './SignUp'

export default class App extends React.Component {
  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: ''
  }
  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }
  signUp() {
    Auth.signUp({
      username: this.state.username,
      //password: this.state.password,
      password: 'Qwerty-123',
      attributes: {
        email: this.state.username,
        phone_number: this.state.phone_number
      }
    })
    .then(() => console.log('successful sign up!'))
    .catch(err => console.log('error signing up!: ', err))
  }
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
    .then(() => { 
      console.log('successful confirm sign up!')
      this.props.navigation.navigate('SignIn')
    }
    )
    .catch(err => console.log('error confirming signing up!: ', err))
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={[styles.gothamLight, styles.title]}>CORAL</Text>
          <Text style={[styles.subText, styles.gothamLight]}>Community Recycling Made Simple</Text>
          <TextInput
            onChangeText={value => this.onChangeText('username', value)}
            style={styles.input}
            placeholder='email'
          />
          {/* <TextInput
            onChangeText={value => this.onChangeText('password', value)}
            style={styles.input}
            secureTextEntry={true}
            placeholder='password'
          /> */}
          <TextInput
            onChangeText={value => this.onChangeText('phone_number', value)}
            style={styles.input}
            placeholder='phone'
          />
          {/* <TextInput
            onChangeText={value => this.onChangeText('email', value)}
            style={styles.input}
            placeholder='email'
          /> */}
          <Button title="Sign Up" onPress={this.signUp.bind(this)} />
          <TextInput
            onChangeText={value => this.onChangeText('confirmationCode', value)}
            style={styles.input}
            placeholder='confirmation Code'
          />
          <Button title="Confirm Sign Up" onPress={this.confirmSignUp.bind(this)} />

          <Text style={styles.signin}>Already a member?</Text>
          <Button 
            title="Sign In Here!" 
            onPress={ () => this.props.navigation.navigate('SignIn')} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  signin: {
    textAlign: 'center',
  },
});
