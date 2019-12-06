import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginBox: {
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
        // borderRadius: 8,
        // elevation: 8,
        // shadowColor: '#c4c4c4',
        // shadowOffset: {width: 0, height: 2},
        // shadowOpacity: 0.2,
    },
    loginTitle: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 18,
        fontFamily: 'IRANSansMobile'
    },
    inputGroups: {
        marginTop: 24,
        marginRight: 16,
        marginLeft: 16,
    },
    inputPhoneNumber: {
        marginTop: 8,
        textAlign: 'right',
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        fontFamily: 'IRANSansMobile'
    },
    inputPhonePassword: {
        marginTop: 16,
        textAlign: 'right',
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        marginBottom: 16,
        fontFamily: 'IRANSansMobile'
    },
    loginButton: {
        textAlign: 'center',
        marginTop: 24,
        backgroundColor: '#329e98',
        color: '#fff',
        marginRight: 36,
        marginLeft: 36,
        borderRadius: 25,
        padding: 10,
        fontSize: 18,
        elevation: 3,
        shadowColor: '#c4c4c4',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.01,
        overflow: 'hidden',
        fontFamily: 'IRANSansMobile'
    },
    registerButton: {
        textAlign: 'center',
        marginTop: 16,
        backgroundColor: '#28a745',
        color: '#fff',
        marginRight: 36,
        marginLeft: 36,
        borderRadius: 25,
        padding: 10,
        fontSize: 18,
        elevation: 3,
        shadowColor: '#c4c4c4',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.01,
        overflow: 'hidden',
        fontFamily: 'IRANSansMobile'
    },
    forgetPassword: {
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16,
        color: '#346086',
        fontSize: 18,
        fontFamily: 'IRANSansMobile'
    },
});

export default styles;
