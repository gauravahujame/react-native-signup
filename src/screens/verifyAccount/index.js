import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Animated, Easing, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';


export default class VerifyAccountScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            otp: null,
        }
    }

    onLogin() {
        if (this.state.otp) {
            // this.props.navigation.push('Home');
            alert(`Great! We're glad you're here.`);
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: lightOrange, padding: 25 }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#f4775a" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => navigation.navigate('CreateAccount')}>
                        <Icon name="ios-arrow-dropleft-circle" type="ionicon" color="white" size={28} />
                    </TouchableOpacity>
                    {/* <Icon name="ios-arrow-dropright-circle" type="ionicon" color="white" size={28} /> */}
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 10, alignSelf: 'center' }}>Verify Account</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', marginBottom: 10, alignSelf: 'center', textAlign: 'center' }}>
                        Please enter the verification code we sent to your email
                </Text>
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'stretch' }}>
                    <TextInput
                        style={{ height: 50, width: '80%', borderBottomWidth: 1.5, borderColor: 'white', alignSelf: 'center', fontSize: 18, fontWeight: '500', color: 'white', marginBottom: 35 }}
                        placeholder="OTP"
                        autoFocus
                        placeholderTextColor="white"
                        onChangeText={(input) => this.setState({ otp: input })} />
                    <Button
                        color="white"
                        backgroundColor="transparent"
                        title="Verify"
                        iconRight={{ name: 'ios-arrow-round-forward', color: 'white', type: 'ionicon', size: 21 }}
                        containerViewStyle={{ borderWidth: 1, borderColor: 'white', width: '80%', alignSelf: 'center' }}
                        onPress={() => this.onLogin()} />
                </View>
                <View style={{ alignItems: 'stretch', alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', textAlign: 'center' }}>
                        Made with ♥ and ☕ by Gaurav Ahuja
                    </Text>
                </View>
            </View>
        );
    }
}

const circleSize = Dimensions.get('screen').width * 1.6;

const indigoBrightColor = '#4130ff';
const indigoColor = '#223b9b';

const purpleBrightColor = '#3807b350';
const purpleColor = '#a311f1';

const pinkBrightColor = '#ff19badd';
const pinkColor = '#dc0ee6';

const lightOrange = '#ff8a6f';

const styles = StyleSheet.create({
    circleSmallTop: {
        height: circleSize / 2,
        width: circleSize / 2,
        borderRadius: circleSize / 4,
        backgroundColor: pinkBrightColor,
    },
    circleBigTop: {
        position: 'absolute',
        // top: -circleSize / 2,
        // left: -circleSize / 2,
        height: circleSize,
        width: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: purpleBrightColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleSmallBottom: {
        height: circleSize / 2,
        width: circleSize / 2,
        borderRadius: circleSize / 4,
        backgroundColor: pinkBrightColor,
    },
    circleBigBottom: {
        position: 'absolute',
        // bottom: -circleSize / 2,
        // right: -circleSize / 2,
        height: circleSize,
        width: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: purpleBrightColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
})