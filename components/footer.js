import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native'


export default class Footer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Button title="Aumentar" onPress={ this.props.sumar }/>
                <Button title="Disminuir" onPress={ this.props.restar }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"#90EE50"
    }
});