//import liraries
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';


import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text: 'Welcome to JobApp', color:'#03A9F4'},
    {text: 'Use this to Find Jobs', color:'#009688'},
    {text: 'Set your location, then swipe away', color:'#03A9F4'}
];

// create a component
class WelcomeScreen extends Component {
    state = {token:null}
    async componentWillMount(){
        let token = await AsyncStorage.getItem('fb_token');
        if(token){
            this.props.navigation.navigate('map');
        } else{
            this.setState({token:false});
        }
    }

    onSlidesComplete = ()=>{
        this.props.navigation.navigate('auth');
    }
    render() {

        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}


//make this component available to the app
export default WelcomeScreen;
