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
    Image,
    Linking,
    TextInput,
    ScrollView
} from 'react-native';
import PixelResolver from './Utils/PixelResolver';
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux';
import LoadingProgressBar from './Loading/LoadingProgressBar';
import NetworkApiCall from './Networks/NetworkApiCall';
import KeysNetwork from './Keys/KeysNetwork';
import KeysColors from './Keys/KeysColor';
const pixelResolverObject = new PixelResolver();

class SkillShare extends Component<> {
    constructor(props) {
        super(props);


        this.state = {
            isApiCallInProgress:false,
            data:[],
            search:'',

        };
    };


    componentDidMount() {

        if (this.props.loginResponse !== undefined && this.props.loginResponse !== null) {
            // We have data!!

            console.log('hello')
            this.setState({
                isApiCallInProgress: true,
            });

            let obj = {};
            obj.id = this.props.loginResponse.id;

            NetworkApiCall.initPostInstance(KeysNetwork.MATCH_END_POINT, JSON.stringify(obj))
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);

                    if (res.code == 200 || res.code == 201) {
                        /*Alert.alert('Success','Contact Successfully Added');*/
                        this.setState({
                            isApiCallInProgress: false,
                            data: res.data,
                        });
                        console.log('login response ', res);


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



        }else{
            console.log('hell')
        }

    }
    BookmarkAPI(id){
        this.setState({
            isApiCallInProgress: true,
        });

        let obj = {};
        obj.id = this.props.loginResponse.id;
        obj.friend_id = id;

        NetworkApiCall.initPostInstance(KeysNetwork.ADD_ACTIVE_END_POINT, JSON.stringify(obj))
            .then((response) => response.json())
            .then((res) => {
                console.log(res);

                this.setState({
                    isApiCallInProgress: false,
                });
                alert(res.message);


            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    isApiCallInProgress: false,
                });
            });

    }

    getRow(obj){
        return( <View style={styles.singleRowContainer}>
            <Image
                source={require('../App/user.png')}/>

            <View style={{flexDirection:'column', marginLeft:pixelResolverObject.getWidth(100)}}>
                <Text>{obj.name}</Text>
                <Text style={{marginTop:pixelResolverObject.getHeight(5)}}>{obj.tech}</Text>
                <View style={{flexDirection:'row', marginTop:pixelResolverObject.getHeight(30)}}>

                    <TouchableOpacity onPress={()=>this.BookmarkAPI(obj.id)} style={[styles.SelectButton]}><Text style={{color:'white'}}>Bookmark</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('fb-messenger://user/'+obj.facebook_id).catch(err => console.error('An error occurred', err));}} style={[styles.SelectButton, {marginLeft:pixelResolverObject.getWidth(100)}]}><Text style={{color:'white'}}>Connect</Text></TouchableOpacity>
                </View>
            </View>
        </View>)

    }

    render() {
        let progressBarView = null;

        if (this.state.isApiCallInProgress){
            progressBarView = <LoadingProgressBar/>;

        }
        let activeUserArray=[];


        if(this.state.search != null && this.state.search != undefined){
            let searchName = this.state.search.toLowerCase();
            this.state.data.map((obj)=>{
                if(obj.tech.includes(searchName)){
                activeUserArray.push(this.getRow(obj))
                }
            })
        }else{
            this.state.data.map((obj)=>{
                activeUserArray.push(this.getRow(obj))
                console.log('pushed one');
            });
        }


        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Skill Share Request
                </Text>
                <View style={styles.SearchRowContainer}>
                    <TextInput
                        returnKeyType={'next'}
                        placeholder='Search '
                        keyboardType="default"
                        onChangeText={(search) => this.setState({search})}
                        placeholderTextColor={'#231f20'}
                        underlineColorAndroid={'transparent'}
                        style={styles.seacrchByTxt}>
                    </TextInput>
                </View>

                <ScrollView>
                {activeUserArray}
                </ScrollView>


                <TouchableOpacity style={[styles.NextButton]}
                                  onPress={()=>{this.props.navigation.dispatch(NavigationActions.back({}))}}>
                    <Text style={{color:'#2590A1'}}> {"\<"} Back</Text>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillShare);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight:'bold',
        marginTop:pixelResolverObject.getHeight(300),
    },
    SelectButton: {
        height: pixelResolverObject.getHeight(90),
        width:pixelResolverObject.getWidth(300),
        borderRadius: 3,
        borderWidth:1,
        borderColor:'#2590A1',
        backgroundColor:'#2590A1',
        justifyContent:'center',
        alignItems:'center'
    },
    SelectedButton: {
        backgroundColor:'blue',
    },
    singleRowContainer: {
        height:pixelResolverObject.getHeight(400),
        width:pixelResolverObject.getHeight(1240),
        marginTop:pixelResolverObject.getHeight(100),
        borderRadius: 3,
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    NextButton: {
        marginTop:pixelResolverObject.getHeight(150),
        height: pixelResolverObject.getHeight(130),
        width:pixelResolverObject.getWidth(450),
        justifyContent:'center',
        alignItems:'center'
    },

    SearchRowContainer: {
        height:pixelResolverObject.getHeight(150),
        width:pixelResolverObject.getHeight(1240),
        marginTop:pixelResolverObject.getHeight(100),
        borderRadius: 3,
        borderWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },

    seacrchByTxt: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        paddingLeft: pixelResolverObject.getWidth(30),
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: pixelResolverObject.getWidth(40),
        borderRadius: pixelResolverObject.getWidth(10),
    },
});
