import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import { Provider } from "react-redux";
import {store, persistor} from './src/config/store';
import { MenuProvider } from 'react-native-popup-menu';
import RootStack from './src/route/Routes';
import Loader from './src/common/Loader';

/**
 * @class - Main App component. This is the first component that runs.
 * This class creates a provider for whole app.
 */
export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      rehydrated:false
    }
  }

  /**
   * Rehydrate the store
   */
  componentDidMount() {
    persistor(()=>{
        const { SearchListingReducer} = store.getState();
        this.setRehydration(true);
    });
}

setRehydration=(status)=>{
  this.setState({
    rehydrated:status
  })
}

  render() {
    const {rehydrated} = this.state;
    if(!rehydrated)
        return this.renderLoader()
    else
        return this.renderProvider()

  }

  /**
   * Render Loader
   */
  renderLoader=()=>(
    <Loader/>
  )

  /**
   * Render Provider
   */
  renderProvider=()=>(
      <Provider store={store}>   
             <MenuProvider>
                <RootStack/>
             </MenuProvider>     
       </Provider>
  )
}

