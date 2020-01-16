import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: width,
        height: height,
    },
    logo: {},
    appName: {
        color: '#ffffff',
        fontSize: 40,
        fontFamily: 'IRANSansMobile',
    },
    appDesc: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'IRANSansMobile',
    },
    appSiteAdd: {
        marginTop: 16,
        color: '#ffffff',
        fontSize: 22,
        fontFamily: 'IRANSansMobile',
    },
});

export default styles;
