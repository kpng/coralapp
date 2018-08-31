import React from 'react';
import { Animated, Image, ImageBackground, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Asset, AppLoading, BlurView } from 'expo';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'
Amplify.configure(AWSConfig)

import Tabs from './Tabs'

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const Backgrounduri = './assets/images/bg.png';


export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
    isReady: false,
    username: '',
    intensity: new Animated.Value(0)
  }

  componentDidMount(){
    this._animate();
  }

  _animate = () => {
    let { intensity } = this.state;
    Animated.timing(intensity, {duration: 2500, toValue: 80}).start() ;
  }

  onChangeText (key, value){
    this.setState({
      [key]:value
    })
  }


  render() {
    if (!this.state.isReady) {
      console.log('Is not ready', this.state.isReady)
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    return (
      <View style={styles.container}> 
        <ImageBackground source = {require('./assets/images/bg.png')} style={{width: '100%', height: '100%'}}>

        </ImageBackground>

        {/* Adjust the tint and intensity */}
{/*
        <BlurView tint="light" intensity={50} style={StyleSheet.absoluteFill}>
          <Image style={{ width: 96, height: 96 }} source={{ Backgrounduri }} />
        </BlurView>
      */}


       <AnimatedBlurView
          tint = "default"
          intensity = {this.state.intensity}
          style = {StyleSheet.absoluteFill} />
      </View>
    );
  }

  async _cacheResourcesAsync(){
    const images = [
      require ('./assets/images/logo.png')
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}


const styles = StyleSheet.create({
  input: {
    height: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});