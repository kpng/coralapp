import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { StyleSheet, View, StatusBar } from 'react-native';

import LoginScreen from './screens/Login/SignIn';
import SignUpScreen from './screens/SignUp/SignUp';

// import LoginScreen from './screens/Login/index';
// import SignupScreen from './screens/Signup/index';
// import ForgotPswdScreen from './screens/ForgotPassword/index';
// import AccountSettingScreen from './screens/AccountSetting/index';
// import MyCampaignsScreen from './screens/MyCampaigns/index';
// import RecyclingDriveBackerScreen from './screens/RecyclingDrive/Backers/index';
// import RecyclingDriveUpdateScreen from './screens/RecyclingDrive/Updates/index';
// import RecyclingDriveCommentScreen from './screens/RecyclingDrive/Comments/index';
// import RecyclingDriveDetailScreen from './screens/RecyclingDrive/Details/index';
// import CampaignFinalStepScreen from './screens/Campaign/FinalStep/index';
// import CampaignStepOneScreen from './screens/Campaign/StepOne/index';
// import CampaignStepTwoScreen from './screens/Campaign/StepTwo/index';
// import CampaignStepThreeScreen from './screens/Campaign/StepThree/index';
// import PaymentScreen from './screens/Payment/index'
// import TransferHistoryScreen from './screens/TransferHistory/index'
// import NotificationScreen from './screens/Notification/index'
// import ProfileScreen from './screens/Profile/index'
// import HomeScreen from './screens/Home/index'

const RouterComponent = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Router>
          <Stack key="root" hideNavBar>
            {/* <Scene key="signup" component={SignUpScreen} initial /> */}
            <Scene key="login" component={LoginScreen} initial />
            {/* <Scene key="signup" component={SignupScreen} />
            <Scene key="forgotpswd" component={ForgotPswdScreen} />
            <Scene key="acctsetting" component={AccountSettingScreen} />
            <Scene key="mycampaign" component={MyCampaignsScreen} />
            <Scene key="recyclingdrivedetail" component={RecyclingDriveDetailScreen} />
            <Scene key="recyclingdrivebacker" component={RecyclingDriveBackerScreen} />
            <Scene key="recyclingdriveupdate" component={RecyclingDriveUpdateScreen}  />
            <Scene key="recyclingdrivecomment" component={RecyclingDriveCommentScreen} />
            <Scene key="champaignfinalstep" component={CampaignFinalStepScreen} />
            <Scene key="champaignstepone" component={CampaignStepOneScreen} />
            <Scene key="champaignsteptwo" component={CampaignStepTwoScreen} />
            <Scene key="champaignstepthree" component={CampaignStepThreeScreen} />
            <Scene key="payment" component={PaymentScreen} />
            <Scene key="notification" component={NotificationScreen} />
            <Scene key="profile" component={ProfileScreen} />
            <Scene key="home" component={HomeScreen} />
            <Scene key="transferhistory" component={TransferHistoryScreen}  /> */}
          </Stack>
        </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RouterComponent;
