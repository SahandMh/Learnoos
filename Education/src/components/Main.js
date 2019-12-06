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

export default class Main extends Component {

    static navigationOptions = {
        headerTitle: <Text style={OriginalStyle.headerTitle}>ثبت نام</Text>,
    };

    registerButtonClick(){

    }

    render() {
        return <View style={styles.container}>
            <View style={styles.loginBox}>

                <ScrollView style={styles.inputGroups}>
                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="نام"/>

                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="نام خانوادگی"/>

                    <TextInput style={styles.inputPhoneNumber}
                               underlineColorAndroid="transparent"
                               placeholder="لطفا شماره موبایل خود را وارد کنید"/>

                    <TextInput style={styles.inputPhonePassword}
                               underlineColorAndroid="transparent"
                               secureTextEntry={true}
                               placeholder="لطفا رمز عبور خود را وارد کنید"/>

                    <TouchableOpacity
                        onPress={this.registerButtonClick()}
                        activeOpacity={0.8}>
                        <Text style={styles.registerButton}>ثبت نام</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>;
    }
}
