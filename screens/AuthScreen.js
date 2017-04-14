//import liraries
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
// can do this too import {facebookLogin} as actions from '../actions';
import * as actions from '../actions';

// create a component
class AuthScreen extends Component {
    componentDidMount(){
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.onAuthComplete(nextProps);

    }
    onAuthComplete(props){
        if(props.token){
            this.props.navigation.navigate('map');
        }
    }
    render() {
       return ( 
       <View/>
        );
    }
}

function mapStateToProps({auth}){
    return {token: auth.token};
}
//make this component available to the app
export default connect (mapStateToProps, actions)(AuthScreen);
