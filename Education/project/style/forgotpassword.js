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
    inputGroups: {
        marginTop: 24,
        marginRight: 16,
        marginLeft: 16,
    },
    inputEmail: {
        marginTop: 8,
        textAlign: 'right',
        borderColor: 'rgba(0,0,0,.1)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 12,
        fontFamily: 'IRANSansMobile'
    },
    sendButton: {
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
    }
});

export default styles;
