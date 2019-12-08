import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    headerBackTitleStyle: {
        ...Platform.select({
            ios: {
                fontFamily: 'IRANSansMobile',
                fontWeight: 'bold',
            },
            android: {
                fontFamily: 'IRANSansMobile_Bold ',
            },
        }),
    },
});
