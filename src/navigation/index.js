import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { CreateAccountScreen, VerifyAccountScreen } from '../screens';

export default createStackNavigator(
    {
        CreateAccount: CreateAccountScreen,
        VerifyAccount: VerifyAccountScreen,
    },
    {
        headerMode: 'none'
    }
);
