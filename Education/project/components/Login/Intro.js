import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    BackHandler,
} from 'react-native';
import styles from '../../style/intro';

export default class Intro extends Component {

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

    navigateToPage = (page) => {
        this.props.navigation.navigate(page);
    };

    render() {
        const {navigate} = this.props.navigation;
        return <View style={styles.containerIntro}>
            <ImageBackground style={styles.firstBox}
                             source={require('../../assets/images/background.png')}>
                <View>
                    <Image style={styles.logo}
                           source={require('../../assets/images/logo.png')}/>
                </View>

                <View>
                    <Text style={styles.appName}>لرنوس</Text>
                </View>

                <View>
                    <Text style={styles.appDesc}>آموزش مهارتهای کاربردی</Text>
                </View>
            </ImageBackground>

            <ScrollView style={styles.secondBox}>
                <View>
                    <Text style={styles.firstText}>
                        لرنوس محیطی است برای{'\n'}
                        آموزش مهارت کاربردی به شما
                    </Text>

                    <Text style={styles.secondText}>
                        مهارت های لرنوس طوری طراحی{'\n'}
                        شده اند که مستقیما شما را وارد{'\n'}
                        بازار کار کنند
                    </Text>

                    <Text style={styles.thirdText}>
                        شما پس از گذراندن دوره در لرنوس{'\n'}
                        مدرک معتبر دریافت میکنید.{'\n'}
                    </Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.thirdBox}
                              onPress={() => navigate('Login')}
                              activeOpacity={0.9}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>شروع میکنم</Text>
                </View>
                <View style={styles.arrowLeft}>
                    <Image style={styles.arrow}
                           source={require('../../assets/images/ic_arrowLeft.png')}/>
                </View>
            </TouchableOpacity>
        </View>;
    }
}
