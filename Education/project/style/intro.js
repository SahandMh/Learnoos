import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    containerIntro: {
        flex: 1,
        flexDirection: 'column',
        width: width,
    },
    firstBox: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondBox: {
        flex: 3,
        height: height,
        backgroundColor: '#314755',
    },
    firstText: {
        textAlign: 'center',
        paddingTop: 40,
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'IRANSansMobile',
    },
    secondText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'IRANSansMobile',
    },
    thirdText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'IRANSansMobile',
    },
    thirdBox: {
        flexDirection: 'row',
    },
    button: {
        flex: 0.8,
        backgroundColor: '#d97d54',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'IRANSansMobile',
    },
    arrowLeft: {
        flex: 0.2,
        backgroundColor: '#c4704b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 10,
        height: 18,
    },
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
});

export default styles;
