import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchListingAction from '../../actions/SearchListingAction';
import DataSearch from '../search/DataSearch';
import GridLayout from '../gridLayout/GridLayout';
import Loader from '../../common/Loader';
import Menus from '../../common/Menus';
import styles from './Home.styles';

/**
 * @class - Home screen component. This component renders images in a grid after searching.
 * You can also change the columns from the menu
 */
class Home extends React.PureComponent {

  constructor(props){
    super(props);

    this.state = {
      columnNumber : 2,
      searchText: '',
      page:1
    }
  }

  componentDidMount(){
    // set seacrhKeyword and page from props to state
    const {searchData} = this.props;
      this.setState({
        searchText:searchData.searchKeyword,
        page:searchData.page
      })
  }

render() {
    const {searchData} = this.props;
    return (
      <View style={styles.container}>
        <Menus changeColumn={this.changeColumn} gridColumnsValue={this.state.columnNumber}/>
        <DataSearch fetchData={this.fetchData.bind(this)} returnKeyType={'done'}/>
        <GridLayout 
            list={ searchData.searchList}
            gridColumnsValue={this.state.columnNumber}
            handleLoadMore={this.handleLoadMore}
            pagination={searchData.pagination}
            onItemPress={this.onItemPress}
        />
        {searchData.loading && <Loader/>}
      </View>
    );
  }

  /**
   * Function to load more
   */
  handleLoadMore=()=>{
    const {determineLength} = this.props.searchData
    if (this.state.page <= determineLength)
      this.setState({
        page: this.state.page + 1
      }, () => {
        this.props.actions.callPaginatedSearchApi(this.state.searchText, this.state.page);
      });
  }

  /**
   * Function to change column
   */
  changeColumn=(column)=>{
    if (column !== this.state.columnNumber)
      this.setState({columnNumber:column})
  }

  /**
   * Fetch data after user pressed done from keyboard or search icon
   * @param {* searchText} searchText 
   */
  fetchData(searchText){
    this.setState({searchText:searchText, page:1})
    this.props.actions.setSearchKeyword(searchText);
    if (searchText !== "")
      this.props.actions.callSearchApi(searchText, 1);
    else
      this.props.actions.clearData();
  }

  /**
   * Navigate to Image Detail - full screen component
   */
  onItemPress=(image)=>{
      this.props.navigation.navigate('Detail', {image});
  }
}

function mapStateToProps({  SearchListingReducer }) {
  return {
    searchData: SearchListingReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({ ...SearchListingAction }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);