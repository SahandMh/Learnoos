import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    BackHandler,
} from 'react-native';
import styles from '../style/login';
import OriginalStyle from '../style/parent';

export default class Main extends Component {

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

    registerButtonClick() {

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
