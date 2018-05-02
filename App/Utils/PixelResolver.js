/**
 * Created by User_airtango on 6/1/2017.
 */

import React, {Component} from 'react';
import {Dimensions} from 'react-native';


/*Definign the canvas size for calculating the images or views sizes*/
let maxCanvasWidth = 2048;  //2560
let maxCanvasHeight = 1536; //1600

let maxCanvasWidth2560 = 2560;  //2560
let maxCanvasHeight1600 = 1600; //1600


let designSize16By9Width = 1440;
let designSize16By9Height = 2560;


/*End of Definign the canvas size for calculating the images or views sizes*/


/*Getting the screen height and width to set the images on that device.*/
const {
    width: deviceScreenWidth,
    height: deviceScreenHeight
} = Dimensions.get('window');
/*End of Getting the screen height and width to set the images on that device.*/

let aspectRatio = deviceScreenHeight / deviceScreenWidth;
export default class PixelResolver {
    constructor() {
    }

    /**
     * @param imgWidth  passing the imgWidth to calculate the image percentage on the current screen.
     * @returns {number} returning the calculated width
     */
    getWidth(imgWidth) {
        if ((aspectRatio) <= (1.4)) {
            //4/3 case
            return ((imgWidth / designSize16By9Width) * deviceScreenWidth);
        } else if (aspectRatio => 1.4 || aspectRatio <= 1.7) {
            // 16/10
            return ((imgWidth / designSize16By9Width) * deviceScreenWidth);
        } else {
            // have bottom bar case
            return ((imgWidth / designSize16By9Width) * deviceScreenWidth);
        }
    }

    /**
     * @param imgHeight passing the imgHeight to calculate the image percentage on the current screen.
     * @returns {number} returning the calculated height
     */
    getHeight(imgHeight) {
        if ((aspectRatio) <= (1.4)) {
            //4/3 case
            return ((imgHeight / designSize16By9Height) * deviceScreenHeight);
        } else if (aspectRatio => 1.4 || aspectRatio <= 1.7) {
            // 16/10
            return ((imgHeight / designSize16By9Height) * deviceScreenHeight);
        } else {
            // have bottom bar case
            return ((imgHeight / designSize16By9Height) * deviceScreenHeight);
        }
    }

    /**
     * @param imgHeight passing the imgHeight to calculate the squared image percentage on the current screen.
     * @returns {number}  returning the calculated height
     */
    getHeightAsWidth(imgWidth) {
        return ((imgWidth / maxCanvasWidth) * deviceScreenWidth);
    }// end of getHeightAsWidth

    getAspectRatio() {
        return aspectRatio;
    }

    getScreenHeight() {
        return deviceScreenHeight;
    }

    getScreenWidth() {
        return deviceScreenWidth
    }
}
