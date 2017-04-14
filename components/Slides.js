//import liraries
import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

// create a component
class Slides extends Component {
    renderLastSlide(index){
        if (index === this.props.data.length -1){
            return(
                <Button
                title="Onwards!"
                raised
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onComplete}
                />
            );
        }
    }
    renderSlides(){
        return this.props.data.map((slide, index)=>{
            return (
            <View 
            key={slide.text} 
            style={[styles.slideStyle, {backgroundColor:slide.color}]}
            >
                <Text style={styles.textStyle}>{slide.text}</Text>
                {this.renderLastSlide(index)}
            </View>
                )
        })
    }
    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{flex:1}}
            >
            {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle:{
        flex:1,
        justifyContent: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color:'white',
        alignItems: 'center',
        textAlign: 'center'

    },
    buttonStyle: {
        backgroundColor: '#0288D1',
        marginTop: 15
    }
};
//make this component available to the app
export default Slides;
