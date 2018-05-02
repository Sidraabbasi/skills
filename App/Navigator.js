import React from 'react';
import {StackNavigator, navigationOptions} from 'react-navigation';

import Login from './Login';
import InterestedIn from './InterestedIn';
import SkillShare from './SkillShare';
import ExpertIn from './ExpertIn';
import ActiveScreen from './ActiveScreen';
import ActiveUsers from './ActiveUsers';



export default SimpleApp = StackNavigator({
    Home: {screen: Login, navigationOptions: {header: null}},
    InterestedIn: {screen: InterestedIn, navigationOptions: {header: null}},
    SkillShare: {screen: SkillShare, navigationOptions: {header: null}},
    ExpertIn: {screen: ExpertIn, navigationOptions: {header: null}},
    ActiveUsers: {screen: ActiveUsers, navigationOptions: {header: null}},
    ActiveScreen: {screen: ActiveScreen, navigationOptions: {header: null}},
});
