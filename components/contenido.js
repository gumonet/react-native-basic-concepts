import React,  {Component} from 'react';
import {StyleSheet, Text, View, Button } from 'react-native'

export default class Contenido extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* <Text> 2 </Text> */}
                <Text>{this.props.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#90EE90"
    }
})