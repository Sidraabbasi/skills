/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AsyncStorage
} from 'react-native';
import PixelResolver from './Utils/PixelResolver';
const pixelResolverObject = new PixelResolver();
import NetworkApiCall from './Networks/NetworkApiCall';
import KeysNetwork from './Keys/KeysNetwork';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import LoadingProgressBar from './Loading/LoadingProgressBar';
import {setLoginAction} from '../App/Actions';

class InterestedIn extends Component<> {
    constructor(props) {
        super(props);


        this.state = {
            React: false,
            ReactNative: false,
            Graphql: false,
            Relay: false,
            Flux: false,
            Jest: false,
            Redex: false,
            buck: false,
            FacebookSDK: false,
            flow: false,
            parseServer: false,
            HHVM: false,
            isApiCallInProgress:false
        };
        /*React, React Native, Graphql, Relay, Flux, Jest, Redex, buck, Facebook SDK, flow, parse Server, flow,  HHVM.*/
    };

    nextButtonSelect(){
        let artArray =[];
        if(this.state.React){
            artArray.push('React')
        }
        if(this.state.ReactNative){
            artArray.push('React Native')
        }
        if(this.state.Graphql){
            artArray.push('Graphql')
        }
        if(this.state.Relay){
            artArray.push('Relay')
        }
        if(this.state.Flux){
            artArray.push('Flux')
        }
        if(this.state.Jest){
            artArray.push('Jest')
        }
        if(this.state.Redex){
            artArray.push('Redex')
        }
        if(this.state.FacebookSDK){
            artArray.push('Facebook SDK')
        }
        if(this.state.flow){
            artArray.push('flow')
        }
        if(this.state.parseServer){
            artArray.push('parse Server')
        }
        if(this.state.HHVM){
            artArray.push('HHVM')
        }
        let data = artArray.join();
        console.log(artArray);

        if(artArray.length >0 ) {
            let obj = {}
            obj.id = this.props.loginResponse.id;
            obj.tech = data;
            this.callAddAPI(obj);
        }else{
            alert('Please select a skill');
        }

    }
    callAddAPI(obj){

        this.setState({
            isApiCallInProgress: true,
        });

        NetworkApiCall.initPostInstance(KeysNetwork.ADD_SKILLS_END_POINT, JSON.stringify(obj))
            .then((response) => response.json())
            .then((res) => {
                console.log(res);

                if (res.code == 200 || res.code == 201) {
                    /*Alert.alert('Success','Contact Successfully Added');*/
                    this.setState({
                        isApiCallInProgress: false,
                    });
                    console.log('login response ', res);

                    if(res.data != null && res.data.length != 0) {

                        let abc = this.props.loginResponse;
                        abc.interest = true;
                        console.log('ABC');
                        console.log(abc);

                        this.props.setLoginResponse(abc);

                        this.props.navigation.dispatch(NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({routeName: 'ExpertIn'})
                            ]
                        }))
                    }
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

    componentDidMount() {

        if (this.props.loginResponse !== undefined && this.props.loginResponse !== null) {
            // We have data!!

            console.log('hello')
            this.setState({
                isApiCallInProgress: true,
            });

            let obj = {};
            obj.id = this.props.loginResponse.id;

            NetworkApiCall.initPostInstance(KeysNetwork.SKILL_END_POINT, JSON.stringify(obj))
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);

                    if (res.code == 200 || res.code == 201) {
                        /*Alert.alert('Success','Contact Successfully Added');*/
                        this.setState({
                            isApiCallInProgress: false,
                        });
                        console.log('login response ', res);

                        if(res.data != null && res.data.length != 0) {
                            this.props.navigation.dispatch(NavigationActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({routeName: 'ExpertIn'})
                                ]
                            }))
                        }
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



    render() {

        let progressBarView = null;

        if (this.state.isApiCallInProgress){
            progressBarView = <LoadingProgressBar/>;

        }

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    I want to learn ...
                </Text>
                <View style={styles.singleRowContainer}>
                    <TouchableOpacity style={[styles.SelectButton, this.state.React && styles.SelectedButton]}
                    onPress={()=>{this.setState({React:!this.state.React})}}>
                        <Text style ={this.state.React && {color:'white'}}>React</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.SelectButton, this.state.ReactNative && styles.SelectedButton]}
                                      onPress={()=>{this.setState({ReactNative:!this.state.ReactNative})}}>
                        <Text style ={this.state.ReactNative && {color:'white'}}>React Native</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.singleRowContainer}>
                    <TouchableOpacity style={[styles.SelectButton, this.state.Graphql && styles.SelectedButton]}
                                      onPress={()=>{this.setState({Graphql:!this.state.Graphql})}}>
                        <Text style ={this.state.Graphql && {color:'white'}}>Graphql</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.SelectButton, this.state.Relay && styles.SelectedButton]}
                                      onPress={()=>{this.setState({Relay:!this.state.Relay})}}>
                        <Text style ={this.state.Relay && {color:'white'}}>Relay</Text>
                    </TouchableOpacity>
                </View>


                    <View style={styles.singleRowContainer}>
                        <TouchableOpacity style={[styles.SelectButton, this.state.Flux && styles.SelectedButton]}
                                          onPress={()=>{this.setState({Flux:!this.state.Flux})}}>
                            <Text style ={this.state.Flux && {color:'white'}}>Flux</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.SelectButton, this.state.Jest && styles.SelectedButton]}
                                          onPress={()=>{this.setState({Jest:!this.state.Jest})}}>
                            <Text style ={this.state.Jest && {color:'white'}}>Jest</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.singleRowContainer}>
                        <TouchableOpacity style={[styles.SelectButton, this.state.Redex && styles.SelectedButton]}
                                          onPress={()=>{this.setState({Redex:!this.state.Redex})}}>
                            <Text style ={this.state.Redex && {color:'white'}}>Redex</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.SelectButton, this.state.buck && styles.SelectedButton]}
                                          onPress={()=>{this.setState({buck:!this.state.buck})}}>
                            <Text style ={this.state.buck && {color:'white'}}>Buck</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.singleRowContainer}>
                        <TouchableOpacity style={[styles.SelectButton, this.state.FacebookSDK && styles.SelectedButton]}
                                          onPress={()=>{this.setState({FacebookSDK:!this.state.FacebookSDK})}}>
                            <Text style ={this.state.FacebookSDK && {color:'white'}}>Facebook SDK</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.SelectButton, this.state.flow && styles.SelectedButton]}
                                          onPress={()=>{this.setState({flow:!this.state.flow})}}>
                            <Text style ={this.state.flow && {color:'white'}}>Flow</Text>
                        </TouchableOpacity>
                    </View>




                    <View style={styles.singleRowContainer}>
                        <TouchableOpacity style={[styles.SelectButton, this.state.parseServer && styles.SelectedButton]}
                                          onPress={()=>{this.setState({parseServer:!this.state.parseServer})}}>
                            <Text style ={this.state.parseServer && {color:'white'}}>Parse Server</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.SelectButton, this.state.HHVM && styles.SelectedButton]}
                                          onPress={()=>{this.setState({HHVM:!this.state.HHVM})}}>
                            <Text style ={this.state.HHVM && {color:'white'}}>HHVM</Text>
                        </TouchableOpacity>
                    </View>


                <TouchableOpacity style={[styles.NextButton]}
                                  onPress={()=>{this.nextButtonSelect()}}>
                    <Text style={{color:'#000'}}>Next</Text>
                </TouchableOpacity>
                {progressBarView}

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginResponse: state.loginResponse
    }
}// end of mapStateToProps


const mapDispatchToProps = (dispatch) => {
    return {setLoginResponse: (loginRes) => {
        dispatch(setLoginAction(loginRes))
    }};
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestedIn);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight:'900',
        color:'#2590A1',
        marginTop:pixelResolverObject.getHeight(300),
    },
    SelectButton: {
        height: pixelResolverObject.getHeight(130),
        width:pixelResolverObject.getWidth(450),
       borderRadius: 3,
        borderWidth:1,
        borderColor:'#2590A1',
        justifyContent:'center',
        alignItems:'center'
    },
    SelectedButton: {
        backgroundColor:'#2590A1',
    },
    singleRowContainer: {
      height:pixelResolverObject.getHeight(100),
      width:pixelResolverObject.getHeight(1140),
        marginTop:pixelResolverObject.getHeight(100),
        justifyContent:'space-between',
        flexDirection:'row'
    },

    NextButton: {
        marginTop:pixelResolverObject.getHeight(150),
        height: pixelResolverObject.getHeight(130),
        width:pixelResolverObject.getWidth(450),
        borderRadius: 3,
        borderWidth:1,
        borderColor:'#BCBCBC',
        backgroundColor:'#BCBCBC',
        justifyContent:'center',
        alignItems:'center'
    },
});
