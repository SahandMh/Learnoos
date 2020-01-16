import React, {Component} from 'react';
import {
    BackHandler,
    Image,
    View,
} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home/Home';
import ProfileStack from './Profile/Profile';

const bottomNavigation = createBottomTabNavigator(
    {
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="ios-person" size={30} color={tintColor}/>,
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="ios-home" size={30} color={tintColor}/>,
            },
        },
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#eb6e3d',
            inactiveTintColor: '#c6c7c9',
        },
    },
);
const AppContainer = createAppContainer(bottomNavigation);

export default class Main extends Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        BackHandler.exitApp();
    };

    static navigationOptions = {
        headerLeft: <Icon name="menu" size={30} color="#ffffff" style={{paddingRight: 10}}/>,
        headerRight: <Icon name="menu" size={30} color="#666e71" style={{paddingLeft: 10}}/>,
        headerTitle: (<Image style={{width:90, height: 40, flex: 1}}
                             source={require('../assets/images/header-logo.png')}
                             resizeMode="contain"/>),
    };

    render() {
        return (
            <AppContainer/>
        );
    }
};
