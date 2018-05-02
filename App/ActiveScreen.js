/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import PixelResolver from './Utils/PixelResolver';

const pixelResolverObject = new PixelResolver();


export default class InterestedIn extends Component<> {
    constructor(props) {
        super(props);


        this.state = {
            React: true,

        };
    };

    render() {


        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Dashboard
                </Text>
                <TouchableOpacity style={[styles.singleRowContainer, { marginTop: pixelResolverObject.getHeight(300)}]} onPress={()=>{this.props.navigation.navigate('ActiveUsers')}}>


                    <Text style={{color:'white', fontWeight:'900', fontSize:pixelResolverObject.getWidth(80)}}>Bookmark Users</Text>
                    {/*<TouchableOpacity style={[styles.SelectButton, {marginLeft:pixelResolverObject.getWidth(100)}]}><Text>Connect</Text></TouchableOpacity>*/}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.singleRowContainer]} onPress={()=>{this.props.navigation.navigate('SkillShare')}}>

                    <Text style={{color:'white', fontWeight:'900', fontSize:pixelResolverObject.getWidth(80)}}>Skill Share Request</Text>
                    {/*<TouchableOpacity style={[styles.SelectButton, {marginLeft:pixelResolverObject.getWidth(100)}]}><Text>Connect</Text></TouchableOpacity>*/}
                </TouchableOpacity>


            </View>
        );
    }
}

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
        fontWeight: 'bold',
        color:'#2590A1',
        marginTop: pixelResolverObject.getHeight(300),
    },
    SelectButton: {
        height: pixelResolverObject.getHeight(90),
        width: pixelResolverObject.getWidth(300),
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SelectedButton: {
        backgroundColor: 'blue',
    },
    singleRowContainer: {
        height: pixelResolverObject.getHeight(300),
        width: pixelResolverObject.getHeight(1240),
        marginTop: pixelResolverObject.getHeight(100),
        borderRadius: 3,
        borderWidth: 1,
        backgroundColor:'#2590A1',
        borderColor: '#100f0f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    NextButton: {
        marginTop: pixelResolverObject.getHeight(150),
        height: pixelResolverObject.getHeight(130),
        width: pixelResolverObject.getWidth(450),
        justifyContent: 'center',
        alignItems: 'center'
    },
});
