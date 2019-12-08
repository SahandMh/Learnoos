import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00b5ec",
        padding: 30
    },
    row: {
        flexDirection: "row"
    },
    titlePage:{
        marginBottom: 30,
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        height: 50,
        marginBottom: 15,
        flexDirection: 'row'
    },
    divErrorFont:{
        textAlign: 'center',
        color: '#721c24',
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
    },
    inputs:{
        height: 50,
        marginLeft:16,
        flex:1,
    },
    fontAwesomeIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width: 250,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: 'transparent',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLinksRow:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txtLink:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    loginText: {
        color: '#fff',
    }
});

export default styles;
