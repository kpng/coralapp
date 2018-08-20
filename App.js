import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';

export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  };

  render() {
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/images/logo.png')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }


    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Enter your mobile number
        </Text>      

      </View>
    );    
  }

  _cacheSplashResourcesAsync = async () => {
//    const gif = require('./assets/images/splash.gif');
    const gif = require('./assets/images/logo.png');
return Asset.fromModule(gif).downloadAsync()
  }

  _cacheResourcesAsync = async () => {
//this is not working->    SplashScreen.hide();
    const images = [
//      require('./assets/images/expo-icon.png'),
//      require('./assets/images/slack-icon.png'),
//      require('./assets/images/RC_profile.png'),
//      require('./assets/images/RC.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isAppReady: true });
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome:{
    fontSize: 26,
    textAlign: 'center',
    margin: 10,
  },

  input:{
    fontSize: 26,
    borderWidth: 2,
    height: 40
  }
});
