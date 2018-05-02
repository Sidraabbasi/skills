import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import KeysColors from '../Keys/KeysColor';

/**
 * @type {PixelResolver} is a class to calculate the image or views height and width
 */


export default class LoadingProgressBar extends Component {

    render() {
        return (
            <View style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: KeysColors.blackHalfOpacity,
                zIndex: 999
            }}>
                <ActivityIndicator style={{flex: 1, justifyContent: 'center'}}/>
            </View>
        )// end of return
    }// end of render
}