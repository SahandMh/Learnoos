import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight, AsyncStorage,
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
                    text: 'Ok',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: `Back to ${namePage} page`, onPress: () => {
                        this.navigateToPage(linkToPage);
                    },
                },
            ],
            {cancelable: false},
        );
    };

    resetPassword = async () => {

        try {
            let user = new Parse.User();
            const result = await user.signUp();
            await AsyncStorage.setItem('sessionToken', result.getSessionToken)
                .then(
                    Parse.User.requestPasswordReset(this.state.email)
                        .then(() => {
                            this._alert('Success', 'An email was sent to your address.', 'Log In', 'LogInStack');
                            this.submitAndClear();
                        }).catch((error) => {
                        this._alert('Error', error.message, 'Log In', 'LogInStack');
                    }),
                );

        } catch (e) {
            console.log(e);
        }
    };

    submitAndClear = () => {
        this.setState({
            email: '',
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titlePage}>Reset Password</Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               keyboardType="email-address"
                               placeholder="Email"
                               value={this.state.email}
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                {!!this.state.nameError && (
                    <View styles={styles.divError}>
                        <Text style={styles.divErrorFont}>{this.state.nameError}</Text>
                    </View>
                )}

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={() => this.resetPassword}>
                    <Text style={styles.loginText}>Send email</Text>
                </TouchableHighlight>

                <View style={styles.containerLinksRow}>
                    <TouchableHighlight style={styles.txtLink} onPress={() => this.navigateToPage('LogInStack')}>
                        <Text style={{fontWeight: 'bold'}}>Login</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.txtLink} onPress={() => this.navigateToPage('SignUpStack')}>
                        <Text style={{fontWeight: 'bold'}}>Register</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
