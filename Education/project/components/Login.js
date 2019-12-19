import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from '../style/login';
import Register from './Register';
import OriginalStyle from '../style/parent';
import {Parse} from 'parse/react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Alert = require('react-native');
const Spinner = require('react-native-spinkit');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
                    this.navigateToPage('Login');
                }).catch(error => {
                    this.navigateToPage('Login');
                });
            }
        });
    }

    loginButtonClick = async () => {
        let
            email = (this.state.email).trim(),
            password = (this.state.password).trim();

        if (email === '') {
            this.setState(() => ({nameError: `لطفا شماره تلفن را وارد کنید`}));
        } else if (password === '') {
            this.setState(() => ({nameError: `لطفا رمز عبور را وارد کنید`}));
        } else {

            try {
                await Parse.User.logIn(email.toString(), password.toString());

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
            <ScrollView style={styles.loginBox}>
                <View style={styles.inputGroups}>
                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               keyboardType="email-address"
                               placeholder='لطفا شماره موبایل خود را وارد کنید'
                               value={this.state.email}
                               onChangeText={(email) => this.setState({email})}
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

                    <TouchableOpacity
                        onPress={() => navigate('ForgotPassword')}
                        activeOpacity={0.8}>
                        <Text style={styles.forgetPassword}>فراموشی رمز عبور</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>;
    }
}
