import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
    },
    loaderImage: {
        width: 90,
        height: 90,
        borderRadius: 15,
    },
});

export default styles;
