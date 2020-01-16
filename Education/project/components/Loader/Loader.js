import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {
    View,
    Modal,
    Image,
    Text,
} from 'react-native';
import styles from '../../style/loader';

export default class Loader extends Component {
    render() {
        const {animationType, modalVisible} = this.props;
        return (
            <Modal
                transparent={true}
                animationType={animationType}
                visible={modalVisible}>
                <View style={styles.container}>
                    <View style={styles.loaderContainer}>
                        <Image style={styles.loaderImage}
                               source={require('../../assets/images/loader.gif')}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

Loader.prototypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
};


