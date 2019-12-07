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

                </ScrollView>
            </View>
        </View>;
    }
}
