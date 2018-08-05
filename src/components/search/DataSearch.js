import React from 'react';
import { View ,TextInput, TouchableOpacity} from 'react-native';
import {SEARCH_DATA} from '../../common/CommonText';
import styles from './Search.styles';
import {TRANSPARENT} from '../../common/CommonColors';
import { Icon } from 'react-native-elements'; 

/**
 * @class - Search screen component.
 * You can enter text and search the entered keyword.
 */
export default class DataSearch extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            searchText:''
        }
    }

    /**
     * Called when text changes.
     * @param {*} searchText 
     */
    setSearchText(searchText){
        this.setState({
            searchText:searchText
        })
    }

    /**
     * Called when searcg icon pressed or done from keyboard is clicked.
     */
    searchClicked=()=>{
        this.props.fetchData(this.state.searchText);
    }

    render() {
    return (
        <View style={styles.searchSection}> 
            <TextInput
                style={styles.searchBar}
                returnKeyType={this.props.returnKeyType}
                placeholder={SEARCH_DATA}
                onChangeText={this.setSearchText.bind(this)}
                underlineColorAndroid={TRANSPARENT}
                onSubmitEditing={this.searchClicked}
            />
            <TouchableOpacity onPress={this.searchClicked}>
                <Icon style={styles.searchIcon} name='search' size={20}/>
            </TouchableOpacity>
         </View>)
    }
}
