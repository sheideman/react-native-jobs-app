//import liraries
import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import {Button} from 'react-native-elements';

// create a component
class ReviewScreen extends Component {
    static navigationOptions = {
        title: 'Review Jobs',
        header: ({ navigate }) => {
          return {
            right:(<Button 
            title="Settings" 
            onPress={()=>navigate('settings')}
            backgroundColor ="rgba(0,0,0,0)"
            color="rgba(0,122,255,1)"
            />
            ),
            style:{
                marginTop: Platform.OS === 'android' ? 12 : 0
            }
          }
        }
    }

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}


//make this component available to the app
export default ReviewScreen;
