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
import OriginalStyle from '../assets/style/parent';
import { Parse } from "parse/react-native";

const AsyncStorage = require('react-native');
const Alert = require('react-native');

export default class Login extends Component {

    // static navigationOptions = {
    //     headerTitle: <Text style={OriginalStyle.headerTitle}>ثبت نام</Text>,
    // };

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            nameError: null
        }
    }

    submitAndClear = () => {
        this.setState({
            username: '',
            password: '',
            nameError: null
        })
    };

    navigateToPage = (page) => {
        this.props.navigation.navigate(page);
    };

    alertAnError = (title,message) => {
        Alert.alert(
            title,
            message,
            [
                {text: 'OK', onPress: () => {this.navigateToPage('Login')}},
            ]
        )
    };

    onSignUp = async() => {

        let
            username = this.state.username,
            email = this.state.email,
            password = this.state.password;

        if (username.trim() === "" || username === undefined || email.trim() === "" || email === undefined  || password.trim() === "" || password === undefined ) {
            this.setState(() => ({ nameError: `Fill the fields correctly.`}));
        } else {
            try {
                await Parse.User.logOut();
                let user = new Parse.User();
                user.set("username", username);
                user.set("email", email);
                user.set("password", password);
                const result = await user.signUp();

                await AsyncStorage.setItem('sessionToken', result.getSessionToken());
                await AsyncStorage.setItem('username', result.getUsername());

                this.submitAndClear();

                this.navigateToPage('Login');
            } catch (error) {
                console.log(error);
                this.setState(() => ({ nameError: error.message }));
            }
        }
    };

    registerButtonClick(){

    }

    render() {
        return <View style={styles.container}>
            <View style={styles.loginBox}>

                <ScrollView style={styles.inputGroups}>
                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="نام"
                               value={this.state.username}
                               onChangeText={(username) => this.setState({username})}/>

                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="نام خانوادگی"/>

                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="لطفا شماره موبایل خود را وارد کنید"
                               value={this.state.email}
                               onChangeText={(email) => this.setState({email})}/>

                    <TextInput style={styles.inputPhonePassword}
                               underlineColorAndroid="transparent"
                               secureTextEntry={true}
                               placeholder="لطفا رمز عبور خود را وارد کنید"
                               value={this.state.password}
                               onChangeText={(password) => this.setState({password})}/>

                    <TouchableOpacity
                        onPress={this.onSignUp}
                        activeOpacity={0.8}>
                        <Text style={styles.registerButton}>ثبت نام</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>;
    }
}
