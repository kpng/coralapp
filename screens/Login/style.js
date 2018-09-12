import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,

  },
  bgImage: {
    height: null,
    width: null,
    flex: 1
  },
  overlayContainer: {
    backgroundColor: 'rgba(150, 146, 163, 0.68);',

    // flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: (Dimensions.get('window').width - 340)/2,
    // marginHorizontal: Dimensions.get('window').width > 320 ? 18 : 8,
    marginVertical: 88,
    paddingVertical: 0,
    paddingHorizontal: 0,
    paddingBottom: 8,
    paddingTop: 8,
  },
  errorTextStyle: {
    fontSize: 12,
    alignSelf: 'center',
    color: 'red'
  },
  logo: {
    height: 255,
    width: 340,
    alignSelf: 'center'
  },
  gothamLight: {
    fontFamily: 'gotham-round'
  },
  title: {
    fontSize: 33,
    color: '#55d400',
    marginTop: 12,
    textAlign: 'center'
  },
  subText: {
    fontSize: 16.5,
    color: 'yellow',
    textAlign: 'center'
  },
  inputStyle: {
    height: 42,
    fontSize: 18,

    backgroundColor: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    color: 'black'
  },
  inputField: {
    alignItems: 'stretch',
    marginTop:110,
    marginBottom: 6
  },
  form: {
    marginTop: 38
  },
  btnGrp: {
    marginTop: 13,
  },
  orange: {
    backgroundColor: '#e07d30'
  },
  red: {
    backgroundColor: '#e02e3d'
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Oswald-Regular'
  },
  btnTouchable: {
    alignItems: 'center',
    // paddingVertical: 14,
    marginBottom: 8,
    height: 41,
    justifyContent: 'center'
  },
  socialBtnTouchable: {
    width: 45,
    height: 45,
    marginHorizontal: 8.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fb: {
    backgroundColor: '#328de3'
  },
  google: {
    backgroundColor: '#de1d2b'
  },
  socialBtnGrp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 19
  },
  forgotPswdLink: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'open-sans-reg'
  },
  greenBtn: {
    backgroundColor: '#2fac5d'
  },  
});
