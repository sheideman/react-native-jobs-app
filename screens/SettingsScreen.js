//import liraries
import React, { Component } from 'react';
import { View, Text, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import * as actions from '../actions'

// create a component
class SettingsScreen extends Component {
    static navigationOptions = {
        header:{
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        }
    }
    render() {
        return (
            <View>
            <Button title="Reset Liked Jobs"
            large
            icon={{name:'delete-forever'}}
            backgroundColor = "#F44336"
            onPress={this.props.clearLikedJobs}
            />
            </View>
        );
    }
}


//make this component available to the app
export default connect(null, actions)(SettingsScreen);
