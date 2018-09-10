import { createStackNavigator } from 'react-navigation'

import SignIn from './SignIn'
import SignUp from './screens/SignUp/SignUp'

const Routes = createStackNavigator (
  {
    SignIn: { 
      screen: SignIn,
      navigationOptions: {
        header: null
      } 
    },
    SignUp: { 
      screen: SignUp,
      navigationOptions: {
        header: null,
      } 
    }
  },
  {
    initialRouteName: "SignIn",
    navigationOptions: {
      backgroundColor: "transparent"
    },
    animationEnable: true
  }
);

export default Routes;
