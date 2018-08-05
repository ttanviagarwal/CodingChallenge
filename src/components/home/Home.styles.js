import { StyleSheet } from 'react-native';
import {GRAY_COLOR, WHITE} from '../../common/CommonColors';

/**
 * Styles for home screen.
 */
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:WHITE
    },
    imageStyle:{
      flex:1,
      height: 100,
      backgroundColor: GRAY_COLOR
    },
    itemView:{
      flex:1, flexDirection: 'column', margin:1
    },
    footerView:{padding:30},
    fullImage:{
      flex:1,
      height:null,
      width:null,
      resizeMode: 'cover'
    }
});