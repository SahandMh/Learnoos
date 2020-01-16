import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        visible: false,
    };

    render() {
        return <View>
            <Text>Home</Text>
        </View>;
    }
}
