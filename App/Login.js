/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage
} from 'react-native';
import NetworkApiCall from './Networks/NetworkApiCall';
import KeysNetwork from './Keys/KeysNetwork';
import LoadingProgressBar from './Loading/LoadingProgressBar';
import PixelResolver from './Utils/PixelResolver';

const pixelResolverObject = new PixelResolver();

const FBSDK = require('react-native-fbsdk');
const {
    LoginButton,
    AccessToken,
} = FBSDK;
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {setLoginAction} from '../App/Actions';

class Login extends Component<> {

    constructor(props) {
        super(props);

        this.state = {
            isApiCallInProgress: false,
        };
    };


    render() {

        if (this.props.loginResponse !== undefined && this.props.loginResponse !== null) {

            if (this.props.loginResponse.interest) {
                if (this.props.loginResponse.skill) {
                    this.props.navigation.dispatch(NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: 'ActiveScreen'})
                        ]
                    }))
                } else {
                    this.props.navigation.dispatch(NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: 'ExpertIn'})
                        ]
                    }))
                }
            } else {
                this.props.navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'InterestedIn'})
                    ]
                }))
            }
        }

        let progressBarView = null;

        if (this.state.isApiCallInProgress) {
            progressBarView = <LoadingProgressBar/>;

        }

        return (
            <View style={styles.container}>
                <Image
                    style={{height: pixelResolverObject.getHeight(600), width: pixelResolverObject.getWidth(700)}}
                    resizeMode='contain'
                    source={require('../App/logo.png')}/>


                <View>
                    <LoginButton

                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    alert("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    alert("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            this.callLoginAPI(data);
                                            // console.log(data)
                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => alert("logout.")}/>
                </View>
                {progressBarView}
            </View>
        );
    }

    callLoginAPI(data) {

        this.setState({
            isApiCallInProgress: true,
        });

        let obj = {};
        obj.facebook_id = data.userID.toString();
        obj.name = 'user';
        obj.token = data.accessToken.toString();

        NetworkApiCall.initPostInstance(KeysNetwork.LOGIN_END_POINT, JSON.stringify(obj))
            .then((response) => response.json())
            .then((res) => {
                console.log(res);

                if (res.code == 200 || res.code == 201) {
                    /*Alert.alert('Success','Contact Successfully Added');*/
                    this.setState({
                        isApiCallInProgress: false,
                    });
                    console.log('login response ', res);

                    this.props.setLoginResponse(res.data);


                    // this.props.navigation.navigate('InterestedIn', {userData:res.data});
                } else {
                    this.setState({
                        isApiCallInProgress: false,
                    });
                    alert('Error' + res.message);
                }

            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    isApiCallInProgress: false,
                });
            });
    }
}

const mapStateToProps = (state) => {
    return {
        loginResponse: state.loginResponse
    }
}// end of mapStateToProps


const mapDispatchToProps = (dispatch) => {
    return {
        setLoginResponse: (loginRes) => {
            dispatch(setLoginAction(loginRes))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
