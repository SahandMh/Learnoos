import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import Profile from './Profile';

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile
    },
});

// const ProfileStack = createAppContainer(Profile);

export default ProfileStack;
