//import liraries
import React, { Component } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import { MapView } from 'expo';

// create a component
class MapScreen extends Component {

    state = {
        mapLoaded:false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta:0.04,
            latitudeDelta: 0.09
        }
    }
    componentDidMount(){
        this.setState({mapLoaded:true});
    }

    render() {
        
            if(!this.state.mapLoaded){
return (<View style={{flex: 1}}>
                <ActivityIndicator size="large"/>
            </View> );
            }
            
       return(<View style={{flex: 1}}>
                <MapView
                region={this.state.region} 
                style={{flex:1}}/>
            </View>)
    }
}


//make this component available to the app
export default MapScreen;
