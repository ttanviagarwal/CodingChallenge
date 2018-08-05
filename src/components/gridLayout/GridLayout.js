import React from 'react';
import {  FlatList, TouchableOpacity, View} from 'react-native';
import styles from '../home/Home.styles';
import Loader from '../../common/Loader';
import ImageComponent from '../../common/ImageComponent';

/**
 * Flat list component rendering images in a grid
 * @param {*} props 
 */
const GridLayout=(props)=>(
     <FlatList
        key={props.gridColumnsValue}
        numColumns={props.gridColumnsValue}
        horizontal={false}
        data={props.list}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({item}) => <GridItem item={item} onItemPress={props.onItemPress}/>}
        onEndReached={props.handleLoadMore}
        onEndThreshold={0}
        ListFooterComponent={props.pagination ? <FooterView/> : null}
     />
)

/**
 * Loader when user paginates the list
 */
const FooterView=()=>(
    <View style={styles.footerView}><Loader/></View>
)

/**
 * Flatlist item
 * @param {*} param0 
 */
const GridItem=({item, onItemPress})=>{
    let image = `https://farm${item.farm}.static.flickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
    return (
        <TouchableOpacity style={styles.itemView} onPress={()=>onItemPress(image)}>
            <ImageComponent source={image} style={styles.imageStyle}/>
        </TouchableOpacity>
    )
} 
export default GridLayout;
