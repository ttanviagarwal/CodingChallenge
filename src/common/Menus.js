import React from 'react';
import {Text} from 'react-native';
import {GRID_COLUMN} from '../common/CommonText';
import styles from './Common.styles';
import {RED, BLACK} from '../common/CommonColors';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

  /**
   * Menus to change column
   * @param {* Props - gridColumnsValue, method-changeColumn} props 
   */
const Menus=(props)=>{
    return (
        <Menu style={styles.menu}>
            <MenuTrigger text={GRID_COLUMN} />
                <MenuOptions>
                    {renderItem(2)}
                    {renderItem(3)}
                    {renderItem(4)}
                </MenuOptions>
        </Menu>
    )

    /**
     * Render item of menu options
     * @param {*} menu 
     */
    function renderItem(menu){
        return <MenuOption value={menu} key={menu} onSelect={() => props.changeColumn(menu)}>
                <Text style={{color: menu === props.gridColumnsValue ? RED : BLACK}}>{menu.toString()}</Text>
            </MenuOption>
    }
}
export default Menus;