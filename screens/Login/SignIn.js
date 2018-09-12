import React from 'react';
import {
  ImageBackground,
  Image,
  TextInput,
  Text,
  Button,
  View,
  ScrollView
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import { Auth } from 'aws-amplify'
// import SignIn from './SignIn'
import SignUpScreen from '../SignUp/SignUp'
import styles from './style';


export default class App extends React.Component {
  state = {
    // username: '',
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
    const { phone_number, password } = this.state
    Auth.signIn(phone_number, password)
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
        <Image source={require('../../assets/images/bg.png')} style={[styles.bgImage]} />
        <ScrollView style={styles.overlayContainer}>
          <Image source={require('../../assets/images/greenWhite.png')} style={styles.logo} />

          <TextInput
            onChangeText={value => this.onChangeText('phone_number', value)}
            style={[styles.inputField, styles.inputStyle]}
            placeholder="Sign in with mobile number"
            placeholderTextColor='grey'
            keyboardType='phone-pad'
            enablesReturnKeyAutomatically={true}
            maxLength={11}
            returnKeyType='next'

          />

          <Text style={styles.subText}>A 6-digit code will be sent to this number</Text>
          <Button title="Sign In" onPress={this.signIn.bind(this)} />

          <Touchable style={[styles.greenBtn, styles.btnTouchable, { marginTop: 88 }]}
            onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <Text>BROWSE CAMPAIGNS</Text>
          </Touchable>
          
          </ScrollView>

      </View>
    );
  }
}

