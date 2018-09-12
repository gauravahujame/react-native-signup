import React from 'react';
import { View, StatusBar, TextInput, StyleSheet, Animated, Easing, Dimensions, Keyboard } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';


export default class CreateAccountScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            email: null
        }
    }

    onLogin() {
        if (this.state.email) {
            this.props.navigation.push('VerifyAccount');
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: lightBlue, padding: 25 }}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#568cff" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Icon name="ios-arrow-dropleft-circle" type="ionicon" color="white" size={28} />
                    {/* <Icon name="ios-arrow-dropright-circle" type="ionicon" color="white" size={28} /> */}
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white', marginBottom: 10, alignSelf: 'center' }}>Create Account</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', marginBottom: 10, alignSelf: 'center', textAlign: 'center' }}>
                        Please enter your email address to receive a verification code
                </Text>
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'stretch' }}>
                    <TextInput
                        style={{ height: 50, width: '80%', borderBottomWidth: 1.5, borderColor: 'white', alignSelf: 'center', fontSize: 18, fontWeight: '500', color: 'white', marginBottom: 35 }}
                        placeholder="Email"
                        autoFocus
                        placeholderTextColor="white"
                        onChangeText={(input) => this.setState({ email: input })} />
                    <Button
                        color="white"
                        backgroundColor="transparent"
                        title="Get Started"
                        iconRight={{ name: 'ios-arrow-round-forward', color: 'white', type: 'ionicon', size: 21 }}
                        containerViewStyle={{ borderWidth: 1, borderColor: 'white', width: '80%', alignSelf: 'center' }}
                        onPress={() => this.onLogin()} />
                </View>
                <View style={{ alignItems: 'stretch', alignSelf: 'center', position: 'absolute', bottom: 30 }}>
                    <Text style={{ fontSize: 12, fontWeight: '400', color: 'white', textAlign: 'center' }}>
                        Already a member?
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white', textAlign: 'center' }}>
                        Login
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
const lightBlue = '#7ba5ff';

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