/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import NativeI18nManager from 'react-native/Libraries/ReactNative/NativeI18nManager';
NativeI18nManager.forceRTL(true);
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {AsyncStorage} from 'react-native';
import Main from './components/Main';
import ForgotPassword from './components/ForgotPassword';

const Parse = require('parse/react-native');
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
    "IY3RYEfBobfUiy4BVmbRbcKUDwPn0xEJ2X9M7nA2",
    "TGqG49nAyA4hk5m5Qyc6Jp1Atg6ZNbyo5TrUbWV3");
Parse.serverURL = "https://parseapi.back4app.com/";

const MainNavigator = createStackNavigator({
    Login: {screen: Login},
    Register: {screen: Register},
    Main: {screen: Main},
    ForgotPassword: {screen: ForgotPassword},
});


const App = createAppContainer(MainNavigator);

export default App;
