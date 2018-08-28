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
        <View style={styles.container}>
          <Image
            source={require('./assets/images/bg.png')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }


    return (
      <View style={styles.container}>
      <Image source = {require('./assets/images/bg.png')} />
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/bg.png');
    return Asset.fromModule(gif).downloadAsync()
  }

  _cacheResourcesAsync = async () => {
    const images = [
      require('./assets/images/bg.png'),
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
    alignItems: 'center',
    justifyContent: 'center',
  }
});