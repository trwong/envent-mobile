import React from 'react';
import {
  StyleSheet,
  View,
  AppRegistry
} from 'react-native';
import Loader from '../misc/loader';
import style from '../styles/map';
import Header from '../header';
import Image from 'react-native-transformable-image-next';
import {fetchModuleData} from '../../util/api';

export default class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }


  componentWillMount(){
    let eventId = this.props.navigation.state.params.eventId;
    fetchModuleData(eventId, "maps")
    .then((map)=>{
      this.setState({
        map,
        isLoading: false
      });
    });
  }

  render (){
    if (this.state.isLoading){
      return (
        <Loader />
      );
    }
    debugger
    return(
      <View>
        <Header
          // TODO: MAP TITLE
          title = {this.state.map.title}
          navigation = {this.props.navigation}
        />
      <View style={style.mapContainer}>
        <Image
            source = {{uri: this.state.map.img_url}}
            style = {style.map}
          />
      </View>
    </View>
    );
  }
}
