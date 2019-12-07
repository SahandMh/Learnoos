import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from '../assets/style/login';
import Register from './Register';
import OriginalStyle from '../assets/style/parent';
import {Parse} from 'parse/react-native';

const Alert = require('react-native');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            nameError: null,
        };
    }

    static navigationOptions = {
        header: null,
    };

    navigateToPage = (page) => {
        this.props.navigation.navigate(page);
    };

    alertAnError = (title, message) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'OK', onPress: () => {
                        this.navigateToPage('Login');
                    },
                },
            ],
        );
    };

    componentWillMount() {
        Parse.User.currentAsync().then(user => {
            if (user !== undefined || user !== null) {
                this.navigateToPage('Login');
            } else {
                let sessionToken = user.getSessionToken();
                Parse.User.become(sessionToken).then(object => {
                    this.navigateToPage('Main');
                }).catch(error => {
                    this.navigateToPage('Login');
                });
            }
        });
    }

    loginButtonClick = async () => {
        let
            phoneNumber = (this.state.phoneNumber).trim(),
            password = (this.state.password).trim();

        if (phoneNumber === '') {
            this.setState(() => ({nameError: `لطفا شماره تلفن را وارد کنید`}));
        } else if (password === '') {
            this.setState(() => ({nameError: `لطفا رمز عبور را وارد کنید`}));
        } else {
            try {
                await Parse.User.logIn(phoneNumber.toString(), password.toString());
                // this.submitAndClear();
                this.props.navigation.navigate('Main');
            } catch (error) {
                this.setState(() => ({nameError: error.message}));
                return (error);
            }
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return <View style={styles.container}>
            <View style={styles.loginBox}>
                <ScrollView style={styles.inputGroups}>
                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="لطفا شماره موبایل خود را وارد کنید"
                               keyboardType="phoneNumber"
                               value={this.state.phoneNumber}
                               onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                               returnKeyType={'next'}
                               blurOnSubmit={false}
                               onSubmitEditing={() => this.passwordRef.focus()}/>

                    <TextInput style={styles.inputPhonePassword}
                               underlineColorAndroid="transparent"
                               secureTextEntry={true}
                               placeholder="لطفا رمز عبور خود را وارد کنید"
                               value={this.state.password}
                               onChangeText={(password) => this.setState({password})}
                               ref={passwordRef => this.passwordRef = passwordRef}
                               returnKeyType='done'/>

                    {!!this.state.nameError && (
                        <View styles={styles.divError}>
                            <Text style={styles.divErrorFont}>{this.state.nameError}</Text>
                        </View>
                    )}

                    <TouchableOpacity
                        onPress={this.loginButtonClick}
                        activeOpacity={0.8}>
                        <Text style={styles.loginButton}>ورود</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigate('Register')}
                        activeOpacity={0.8}>
                        <Text style={styles.registerButton}>ثبت نام</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>;
    }
}
