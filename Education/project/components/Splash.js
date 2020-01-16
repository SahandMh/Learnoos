import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    BackHandler, ImageBackground,
} from 'react-native';
import {Parse} from 'parse/react-native';
import styles from '../style/splash';

export default class Splash extends Component {

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
        header: null,
    };

    navigateToPage = (page) => {
        this.props.navigation.navigate(page);
    };

    componentWillMount() {
        setTimeout(() => {
            Parse.User.currentAsync().then(user => {
                if (user !== undefined || user !== null) {
                    this.navigateToPage('Main');
                } else {
                    let sessionToken = user.getSessionToken();
                    Parse.User.become(sessionToken).then(object => {
                        this.navigateToPage('Intro');
                        this.connectionMessage();
                    }).catch(error => {
                        this.navigateToPage('Login');
                        this.connectionMessage();
                    });
                }
            });
        }, 3500);
    }

    render() {
        return <ImageBackground style={styles.container}
                                source={require('../assets/images/background.png')}>
            <View>
                <Image style={styles.logo}
                       source={require('../assets/images/logo.png')}/>
            </View>

            <View>
                <Text style={styles.appName}>لرنوس</Text>
            </View>

            <View>
                <Text style={styles.appDesc}>آموزش مهارتهای کاربردی</Text>
            </View>

            <View>
                <Text style={styles.appSiteAdd}>Learnoos.com</Text>
            </View>
        </ImageBackground>;
    }
}
