import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight, AsyncStorage, ScrollView, TouchableOpacity,
} from 'react-native';
import {Parse} from 'parse/react-native';
import styles from '../style/forgotpassword';

export default class ForgotPassword extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nameError: '',
        };
    }

    navigateToPage = (page) => {
        this.props.navigation.navigate(page);
    };

    _alert = (title, message, namePage, linkToPage) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: 'باشه',
                    onPress: () => this.navigateToPage('Login'),
                    style: 'cancel',
                }
            ],
            {cancelable: false},
        );
    };

    resetPassword = async () => {
        Parse.User.requestPasswordReset(this.state.email)
            .then(() => {
                this._alert('پیام!', 'ایمیلی به آدرس ایمیل شما ارسال شد.', 'Log In', 'Login');
                this.submitAndClear();
            }).catch((error) => {
            this._alert('Error', error.message, 'Log In', 'Login');
        });
    };

    submitAndClear = () => {
        this.setState({
            email: '',
        });
    };

    render() {
        return <View style={styles.container}>
            <ScrollView style={styles.loginBox}>
                <View style={styles.inputGroups}>
                    <TextInput style={styles.inputEmail}
                               underlineColorAndroid="transparent"
                               keyboardType="email-address"
                               placeholder='لطفا ایمیل خود را وارد کنید'
                               value={this.state.email}
                               onChangeText={(email) => this.setState({email})}
                               blurOnSubmit={false}
                               ref={passwordRef => this.passwordRef = passwordRef}
                               returnKeyType='done'/>

                    {!!this.state.nameError && (
                        <View styles={styles.divError}>
                            <Text style={styles.divErrorFont}>{this.state.nameError}</Text>
                        </View>
                    )}

                    <TouchableOpacity
                        onPress={this.resetPassword}
                        activeOpacity={0.8}>
                        <Text style={styles.sendButton}>ارسال</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>;
    }
}
