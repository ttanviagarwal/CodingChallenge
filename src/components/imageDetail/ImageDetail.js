import React from 'react';
import { Image, View } from 'react-native';
import styles from '../home/Home.styles';
import ImageComponent from '../../common/ImageComponent';

/**
 * @class - Image Detail component to show full screen image.
 */
class ImageDetail extends React.Component {
      
    render() {
        return (
            <ImageComponent source={this.props.navigation.state.params.image} style={styles.fullImage}/>
        );
    }
}
export default ImageDetail;