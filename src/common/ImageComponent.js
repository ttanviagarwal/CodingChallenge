import React from 'react';
import {CachedImage} from "react-native-img-cache";

/**
 * Cached component for image
 * @param props 
 */
const ImageComponent=(props)=>(
    <CachedImage source={{uri:props.source}} style={props.style} />

)
export default ImageComponent;