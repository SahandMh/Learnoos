import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity, Image,
} from 'react-native';
import styles from '../../style/register';
import {Parse} from 'parse/react-native';
import {AsyncStorage} from 'react-native';
import Loader from '../Loader/Loader';

const Alert = require('react-native');
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            familyName: '',
            password: '',
            phoneNumber:'',
            nameError: null,
            loadingVisible: false,
        };
    }

    // static navigationOptions = {
    //     headerTitle: <Text style={OriginalStyle.headerTitle}>ثبت نام</Text>,
    // };

    static navigationOptions = {
        header: null,
    };

    submitAndClear = () => {
        this.setState({
            username: '',
            familyName: '',
            password: '',
            phoneNumber:'',
            nameError: null,
        });
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

    onSignUp = async () => {
        this.setState({loadingVisible: true});
        let
            username = this.state.username,
            familyName = this.state.familyName,
            email = this.state.email,
            password = this.state.password,
            phoneNumber = this.state.phoneNumber;

        if (username.trim() === '' || username === undefined || email.trim() === '' || email === undefined || password.trim() === '' || password === undefined) {
            this.setState({loadingVisible: false});
            this.setState(() => ({nameError: `لطفا همه فیلد ها را پر کنید`}));
        } else {
            try {
                await Parse.User.logOut();
                let user = new Parse.User();
                user.set('username', username);
                user.set('familyName', familyName);
                user.set('email', email);
                user.set('password', password);
                user.set('phoneNumber', phoneNumber);
                const result = await user.signUp();

                await AsyncStorage.setItem('sessionToken', result.getSessionToken());
                await AsyncStorage.setItem('username', result.getUsername());

                this.submitAndClear();
                this.setState({loadingVisible: false});
                this.navigateToPage('Login');
            } catch (error) {
                console.log(error);
                this.setState({loadingVisible: false});
                this.setState(() => ({nameError: error.message}));
            }
        }
    };

    render() {
        const {loadingVisible} = this.state;
        return <View style={styles.container}>
            <ScrollView style={styles.loginBox}>
                <View style={styles.inputGroups}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../assets/images/logo.png')}/>
                    </View>

                    <View>
                        <Text style={styles.appName}>ثبت نام</Text>
                    </View>
                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="نام"
                               placeholderTextColor='#637581'
                               value={this.state.username}
                               onChangeText={(username) => this.setState({username})}
                               returnKeyType={'next'}
                               blurOnSubmit={false}
                               onSubmitEditing={() => this.familyNameRef.focus()}/>

                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="نام خانوادگی"
                               placeholderTextColor='#637581'
                               value={this.state.familyName}
                               onChangeText={(familyName) => this.setState({familyName})}
                               ref={familyNameRef => this.familyNameRef = familyNameRef}
                               onSubmitEditing={() => this.phoneNumberRef.focus()}
                               blurOnSubmit={false}
                               returnKeyType={'next'}/>

                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="لطفا شماره موبایل خود را وارد کنید"
                               placeholderTextColor='#637581'
                               value={this.state.phoneNumber}
                               onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                               ref={phoneNumberRef => this.phoneNumberRef = phoneNumberRef}
                               onSubmitEditing={() => this.emailRef.focus()}
                               blurOnSubmit={false}
                               returnKeyType={'next'}/>

                    <TextInput style={styles.inputEmail}
                               underlineColorAndroid="transparent"
                               placeholder="لطفا ایمیل خود را وارد کنید"
                               placeholderTextColor='#637581'
                               value={this.state.email}
                               onChangeText={(email) => this.setState({email})}
                               ref={emailRef => this.emailRef = emailRef}
                               onSubmitEditing={() => this.passwordRef.focus()}
                               blurOnSubmit={false}
                               returnKeyType={'next'}/>

                    <TextInput style={styles.inputPhonePassword}
                               underlineColorAndroid="transparent"
                               secureTextEntry={true}
                               placeholder="لطفا رمز عبور خود را وارد کنید"
                               placeholderTextColor='#637581'
                               value={this.state.password}
                               onChangeText={(password) => this.setState({password})}
                               ref={passwordRef => this.passwordRef = passwordRef}
                               returnKeyType='done'/>

                    <TouchableOpacity
                        onPress={this.onSignUp}
                        activeOpacity={0.8}>
                        <Text style={styles.registerButton}>ثبت نام</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Loader
                animationType="fade"
                modalVisible={loadingVisible}/>
        </View>;
    }
}
