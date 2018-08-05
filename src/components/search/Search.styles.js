import { StyleSheet } from 'react-native';
import {GRAY_COLOR} from '../../common/CommonColors';

/**
 * Style for search.
 */
export default StyleSheet.create({
    searchBar: {
        paddingLeft: 10,
        marginRight:10,
        fontSize: 14,
        height: 50,
        flex: 8,
        borderWidth: 5,
        borderColor: GRAY_COLOR,
        borderRadius:10
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        margin:10
    },
    searchIcon: {
        padding: 10
    }
  });