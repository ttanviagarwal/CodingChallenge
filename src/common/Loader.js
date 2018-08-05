import React from 'react';
import {ActivityIndicator} from 'react-native';
import {TRANSPARENT} from '../common/CommonColors';

/**
 * Loader using Activity Indicator
 * @param style color and size  props 
 */
const Loader=(props)=>(
            <ActivityIndicator
                animating={true}
                style={[props.style, { position:'absolute', top:0,
                right: 0, left: 0, bottom: 0, backgroundColor:TRANSPARENT}]}
                color={props.color || 'black'}
                size={props.size || 'large'}/>
)
export default Loader;