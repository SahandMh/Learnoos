import React, {Component} from 'react';
import {
    BackHandler,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Platform, Image, ImageBackground,
} from 'react-native';
import styles from '../../style/login';
import Register from './Register';
import {Parse} from 'parse/react-native';
import Loader from '../Loader/Loader';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import {AsyncStorage} from 'react-native';

const Alert = require('react-native');
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nameError: null,
            loadingVisible: false,
        };
    }

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

    // componentWillMount() {
    //     Parse.User.currentAsync().then(user => {
    //         if (user !== undefined || user !== null) {
    //             this.navigateToPage('Main');
    //         } else {
    //             let sessionToken = user.getSessionToken();
    //             Parse.User.become(sessionToken).then(object => {
    //                 this.navigateToPage('Login');
    //                 this.connectionMessage();
    //             }).catch(error => {
    //                 this.navigateToPage('Login');
    //                 this.connectionMessage();
    //             });
    //         }
    //     });
    // }

    connectionMessage() {
        showMessage({
            message: "پیغام سیستم",
            description: "لطفا اتصال به اینترنت خود را برقرار کنید.",
            type: "success",
            backgroundColor: "#a76357", // background color
            color: "#ffffff", // text color
            textStyle: "bold",
            hideOnPress: true,
            autoHide: false,
            icon: 'info',

        });
    }

    loginButtonClick = async () => {
        this.setState({loadingVisible: true});
        let
            email = (this.state.email).trim(),
            password = (this.state.password).trim();

        if (email === '') {
            this.setState({loadingVisible: false});
            this.setState(() => ({nameError: `لطفا ایمیل خود را وارد کنید`}));
        } else if (password === '') {
            this.setState({loadingVisible: false});
            this.setState(() => ({nameError: `لطفا رمز عبور را وارد کنید`}));
        } else {
            try {
                await Parse.User.logIn(email.toString(), password.toString());
                this.setState({loadingVisible: false});
                await AsyncStorage.setItem('isLogin', "true");
                this.props.navigation.navigate('Main');
            } catch (error) {
                this.setState({loadingVisible: false});
                this.setState(() => ({nameError: error.message}));
                return (error);
            }
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        const {loadingVisible} = this.state;
        return <View style={styles.container}>
            <ScrollView style={styles.loginBox}>
                <View style={styles.inputGroups}>
                    <View style={styles.logo}>
                        <Image
                               source={require('../../assets/images/logo.png')}/>
                    </View>

                    <View>
                        <Text style={styles.appName}>ورود</Text>
                    </View>
                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               keyboardType="email-address"
                               placeholder='لطفا ایمیل خود را وارد کنید'
                               placeholderTextColor='#637581'
                               value={this.state.email}
                               onChangeText={(email) => this.setState({email})}
                               returnKeyType={'next'}
                               blurOnSubmit={false}
                               onSubmitEditing={() => this.passwordRef.focus()}/>

                    <TextInput style={styles.inputPhonePassword}
                               underlineColorAndroid="transparent"
                               secureTextEntry={true}
                               placeholder="لطفا رمز عبور خود را وارد کنید"
                               placeholderTextColor='#637581'
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
            <Loader
                animationType="fade"
                modalVisible={loadingVisible}/>

            <FlashMessage
                position="top" />
        </View>;
    }
}
