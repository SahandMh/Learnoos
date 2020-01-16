/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Main from './components/Main';
import Profile from './components/Profile/Profile';
import ForgotPassword from './components/Login/ForgotPassword';
import Splash from './components/Splash';
import Home from './components/Home/Home';
import Intro from './components/Login/Intro';
import NativeI18nManager from 'react-native/Libraries/ReactNative/NativeI18nManager';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EStyleSheet from 'react-native-extended-stylesheet';

NativeI18nManager.forceRTL(true);
const Parse = require('parse/react-native');
const {AsyncStorage} = require('react-native');

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://parseapi.back4app.com/';
Parse.initialize(
    'IY3RYEfBobfUiy4BVmbRbcKUDwPn0xEJ2X9M7nA2',
    'TGqG49nAyA4hk5m5Qyc6Jp1Atg6ZNbyo5TrUbWV3',
);

EStyleSheet.build();

const MainNavigator = createStackNavigator({
    Splash: {screen: Splash},
    Intro: {screen: Intro},
    Login: {screen: Login},
    Register: {screen: Register},
    ForgotPassword: {screen: ForgotPassword},
    Main: {screen: Main},
    // Home: {screen: Home},
    // Profile: {screen: Profile},
});

const App = createAppContainer(MainNavigator);

export default App;
